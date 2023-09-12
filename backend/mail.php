<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
require 'PHPMailer-master/src/Exception.php';  // Add this line

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;  // Add this line

// Create a new PHPMailer instance
$mail = new PHPMailer();

// SMTP configuration
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'hadjsassiscompany@gmail.com'; // Your Gmail email address
$mail->Password = 'andqxctptclrkiyc'; // Your Gmail password

// Sender and recipient
$mail->setFrom('hadjsassiscompany@gmail.com');
$mail->addAddress('mahdihadjsassi1@gmail.com');

// Email content
$mail->Subject = 'Test Email';
$mail->Body = 'This is a test email from PHPMailer';

// Send email
if ($mail->send()) {
    echo 'Email sent successfully!';
} else {
    echo 'Email could not be sent. Mailer Error: ' . $mail->ErrorInfo;
}
?>
