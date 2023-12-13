<?php
// Start the session
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect the user to the login page or any other desired page
    header('Location: index.html');
    exit();
}

// Continue with your protected page logic
// ...

?>
