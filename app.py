from flask import Flask, render_template, request, jsonify # type: ignore
import heapq

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/dijkstra", methods=["POST"])
def dijkstra():
    data = request.get_json()
    graph = data["graph"]
    start = data["start"]
    end = data["end"]

    # Dijkstra algorithm
    dist = {node: float('inf') for node in graph}
    prev = {node: None for node in graph}
    dist[start] = 0
    pq = [(0, start)]

    while pq:
        current_dist, u = heapq.heappop(pq)
        if u == end:
            break
        for neighbor in graph[u]:
            v = neighbor["node"]
            weight = neighbor["weight"]
            alt = dist[u] + weight
            if alt < dist[v]:
                dist[v] = alt
                prev[v] = u
                heapq.heappush(pq, (alt, v))

    # Truy vết đường đi
    path = []
    node = end
    while node:
        path.insert(0, node)
        node = prev[node]

    return jsonify({
        "path": path,
        "cost": dist[end] if dist[end] != float('inf') else None
    })

if __name__ == "__main__":
    app.run(debug=True)
