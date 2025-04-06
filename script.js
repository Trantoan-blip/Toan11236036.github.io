const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let nodes = [];
let edges = [];
let draggingNode = null;
let connectingFrom = null;
let pathHighlight = [];

// Vẽ lại canvas
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Vẽ cạnh
  edges.forEach(edge => {
    const from = nodes.find(n => n.id === edge.from);
    const to = nodes.find(n => n.id === edge.to);
    ctx.strokeStyle = pathHighlight.includes(edge.from + "-" + edge.to) ? "red" : "black";
    ctx.lineWidth = pathHighlight.includes(edge.from + "-" + edge.to) ? 3 : 1;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    // Trọng số
    const mx = (from.x + to.x) / 2;
    const my = (from.y + to.y) / 2;
    ctx.fillStyle = "blue";
    ctx.fillText(edge.weight, mx, my);
  });

  // Vẽ đỉnh
  nodes.forEach(n => {
    ctx.beginPath();
    ctx.arc(n.x, n.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "black";
    ctx.fillText(n.id, n.x - 5, n.y + 5);
  });
}

canvas.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  const id = String.fromCharCode(65 + nodes.length); // A, B, C...

  nodes.push({ id, x, y });
  draw();
});

canvas.addEventListener("mousedown", (e) => {
  const x = e.offsetX, y = e.offsetY;
  connectingFrom = nodes.find(n => Math.hypot(n.x - x, n.y - y) < 20);
});

canvas.addEventListener("mouseup", (e) => {
  const x = e.offsetX, y = e.offsetY;
  const toNode = nodes.find(n => Math.hypot(n.x - x, n.y - y) < 20);
  if (connectingFrom && toNode && connectingFrom !== toNode) {
    const weight = prompt("Trọng số cạnh:", "1");
    if (!isNaN(weight)) {
      edges.push({ from: connectingFrom.id, to: toNode.id, weight: parseInt(weight) });
    }
  }
  connectingFrom = null;
  draw();
});

// Tạo JSON từ nodes & edges
function buildGraphJSON() {
  const graph = {};
  nodes.forEach(n => graph[n.id] = []);
  edges.forEach(e => {
    graph[e.from].push({ node: e.to, weight: e.weight });
  });
  return graph;
}

// Gửi đến Flask và highlight kết quả
async function runDijkstra() {
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const graph = buildGraphJSON();

  const res = await fetch("/dijkstra", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ graph, start, end })
  });
  const data = await res.json();

  // Highlight đường đi
  pathHighlight = [];
  for (let i = 0; i < data.path.length - 1; i++) {
    pathHighlight.push(data.path[i] + "-" + data.path[i + 1]);
  }
  document.getElementById("result").innerText = 
    `Đường đi: ${data.path.join(" → ")} (Chi phí: ${data.cost})`;
  draw();
}
