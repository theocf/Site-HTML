
<?php
// Check for empty fields
if(empty($_POST['radio']) || empty($_POST['convidados']))
   {
   echo "Preencha os campos!";
   return false;
   }
   
$simounao = $_POST['radios'];
$convidados = $_POST['convidados'];
   
// Create the email and send the message
$to = 'casamento@isaetheo.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "CASAMENTO - RSVP: $simounao";
$email_body = "\Sim ou não: $simounao\Confirmados:\n$convidados";
$headers = "From: oi@isaetheo.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>