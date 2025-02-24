<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Đăng ký khoá học Trung tâm Tin học NEU</title>
</head>
<style>
    header {
        background-color: white;
        color: black;
        text-align: center;
        padding: 10px;

    }

    input {
        width: 100%;
    }

    body {
        background-color: #1abc9c;
        font-family: sans-serif;
    }

    h1 {
        text-align: center;
    }

    .form-block {
        background-color: #1abc9c;
    }

    .form-subblock,
    .form-block-button {
        display: flex;
    }

    .form-subblock>div,
    .form-block-button>div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 20px
    }

    .form-block label {
        color: #fff;
        opacity: 85%;
        padding-bottom: 5px;
        font-size: 15px
    }

    .form-block input {
        padding: 5px;
        color: #00a886;
        font-size: 18px
    }

    input[type=submit] {
        padding: 10px;
        font-size: 18px;
        border: 1px solid #1abc9c;
        background-color: #1abc9c;
        color: white;
        margin-left: 20px;
    }

    input[type=reset] {
        padding: 10px;
        font-size: 18px;
        border: 1px solid #1abc9c;
        background-color: white;
        color: #00896d;
    }

    .form-block input,
    select {
        padding: 5px;
        border: 0px;
        color: #00896d;
        accent-color: #00896d;
    }

    select {
        padding: 5px;
        color: #00a886;
        font-size: 18px
    }

    .form-block input,
    select:focus {
        outline-width: 0;
    }

    .form-subblock textarea {
        border: none;
        height: 100px;
        resize: none;
        font-size: 18px;
        font-family: Arial;
        color: #00896d;
    }
</style>

<body>
    <header>
        <h1>Đăng ký khoá học</h1>
    </header>
    <main>
        <section>
            <h2>Thông tin cá nhân</h2>
            <form>
                <label for="name">Họ và tên:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="phone">Số điện thoại:</label>
                <input type="tel" id="phone" name="phone" required>
            </form>
        </section>
        <section>
            <h2>Thông tin khoá học</h2>
            <form>
                <label for="course">Khoá học:</label>
                <select id="course" name="course" required>
                    <option value="">Chọn khoá học</option>
                    <option value="web-design">Thiết kế Web với HTML, CSS & JavaScript</option>
                    <option value="web-development">Phát triển Web với Php & MySQL</option>
                    <option value="web-seo">Phát triển Web với ASP.Net & SQL Server</option>
                </select>
                <label for="date">Ngày bắt đầu:</label>
                <input type="date" id="date" name="date" required>
                <label for="time">Thời gian:</label>
                <select id="time" name="time" required>
                    <option value="">Chọn thời gian</option>
                    <option value="morning">Sáng</option>
                    <option value="afternoon">Chiều</option>
                    <option value="evening">Tối</option>
                </select>
            </form>
        </section>
        <section>
            <h2>Phương thức thanh toán</h2>
            <form>
                <label for="payment">Chọn phương thức:</label>
                <select id="payment" name="payment" required>
                    <option value="">Chọn phương thức thanh toán</option>
                    <option value="credit-card">Thẻ tín dụng</option>
                    <option value="cash">Tiền mặt</option>
                </select>
            </form>
        </section>
        <div class="form-subblock">
            <div>
                <label for="request">Các yêu cầu khác</label>
                <textarea id="request" name="request" style="display: block"></textarea>
            </div>
        </div>
        <section>
            <form>
                <input type="submit" value="Đăng ký">
            </form>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Trung tâm Tin học NEU</p>
    </footer>

</body>

</html>