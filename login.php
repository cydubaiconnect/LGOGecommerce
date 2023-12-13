<?php
session_start();

$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'loginform';

$con = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);
if (mysqli_connect_errno()) {
    exit('Failed to connect to MySQL: ' . mysqli_connect_error());
}

if (isset($_POST['email'], $_POST['password'])) {
    $emailInput = $_POST['email'];
    $passwordInput = $_POST['password'];

    if ($stmt = $con->prepare('SELECT password FROM users WHERE email = ?')) {
        $stmt->bind_param('s', $emailInput);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($storedPassword);
            $stmt->fetch();

            if ($passwordInput === $storedPassword) {
                session_regenerate_id();
                $_SESSION['loggedin'] = TRUE;
                $_SESSION['email'] = $emailInput;
                header('Location: home.html');
                exit;
            } else {
                echo 'Incorrect password!';
            }
        } else {
            echo 'Incorrect email!';
        }
        $stmt->close();
    }
}
?>