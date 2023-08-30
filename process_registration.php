<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["fullname"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Mã hóa mật khẩu

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
    
    // Tạo truy vấn SQL để thêm người dùng vào cơ sở dữ liệu
    $sql = "INSERT INTO user (name, email, password) VALUES ('$username', '$email', '$password')";
    
    if ($conn->query($sql) === TRUE) {
        // echo "Registration successful!";
        header("Location: index.html");
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    
    $conn->close(); // Đóng kết nối
}
?>
