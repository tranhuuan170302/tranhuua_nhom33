<?php
    session_start(); // Bắt đầu phiên làm việc

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Kết nối tới cơ sở dữ liệu MySQL
        $db_host = "192.168.1.3";
        $db_username = "an170302";
        $db_password = "an170302";
        $db_name = "web_trasua_data";
        
        $conn = new mysqli($db_host, $db_username, $db_password, $db_name);
        
        // Kiểm tra kết nối
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        // Tạo truy vấn SQL để kiểm tra thông tin đăng nhập
        $sql = "SELECT * FROM user WHERE name = '$username'";
        $result = $conn->query($sql);
        
        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row["password"])) {
                $_SESSION["username"] = $row["username"];
                header("Location: index.html");
                exit();
            } else {
                echo "Invalid password.";
            }
        } else {
            echo "Username not found.";
        }
        
        $conn->close(); // Đóng kết nối
    }
?>
