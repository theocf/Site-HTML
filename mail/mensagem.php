
<?php
// Check for empty fields
if(empty($_POST['nome']) || empty($_POST['mensagem']))
   {
   echo "Preencha os campos!";
   return false;
   }
   
$nome = $_POST['nome'];
$mensagem = $_POST['mensagem'];
   
// Create the email and send the message
$to = 'casamento@isaetheo.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "CASAMENTO - Mensagem para os noivos:  $nome";
$email_body = "Mensagem pelo site:\n"."\nNome: $nome\nMensagem:\n$mensagem";
$headers = "From: oi@isaetheo.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>