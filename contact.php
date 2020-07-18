<?php
if(isset($_POST['submit'])){
    $name= $_POST ['name'];
    $mailFrom= $_POST ['email'];
    $services= $_POST ['services'];
    $subject= $_POST ['subject'];
     

    $mailTo= "mohammad_570@hotmail.com";
    $headers= "From: ".$mailFrom;
    $txt= "You have received an email from ".$name.".\n\n".$subject

    mail($mailTo, $services, $subject, $txt, $headers);
    header("Location: index.php?mailsent");
}
?>