<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "sergiodecrescenzo2003@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recived an email from".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}