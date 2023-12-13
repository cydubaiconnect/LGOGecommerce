<?php
$dbusername = 'root';
$dbpassword = '';
$database = 'loginform';

$connection = mysqli_connect('localhost', $dbusername, $dbpassword, $database);

if (!$connection) {
    die('Unable to connect to the database!');
}

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $query = "insert into users (username, password, email) VALUES('$username', '$password', '$email')";

    $result = mysqli_query($connection, $query);

    if ($result) {
        echo 'SUCCESSFULLY REGISTERED!';

        // Send a welcome email
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sender's email address
            $sender_email = "your@gmail.com"; // Replace with your Gmail email address

            // Subject and message for the email
            $subject = "Welcome to Our Website";
            $message = "Thank you for signing up on our website!";

            // Additional headers
            $headers = "From: $sender_email\r\n";
            $headers .= "Reply-To: $sender_email\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

            // Send the email using Gmail SMTP
            if (mail($email, $subject, $message, $headers, "-f $sender_email")) {
                echo " An email has been sent to your registered email address.";
            } else {
                echo "Email sending failed.";
            }
        }

        // Redirect to the index page
        header('Location: index.html');
        exit();
    } else {
        echo 'SORRY, no record was inserted!';
    }
}
?>