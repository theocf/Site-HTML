<?php
// Check for empty fields
if(empty($_POST['artista']) || empty($_POST['musica']))
   {
	echo "Preencha os campos!";
	return false;
   }
	
$artista = $_POST['artista'];
$musica = $_POST['musica'];
	
// Create the email and send the message
$to = 'casamento@isaetheo.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "CASAMENTO - Pedido de musica:  $musica - $artista";
$email_body = "Artista: $artista\n\Musica: $musica";
$headers = "From: oi@isaetheo.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.	
mail($to,$email_subject,$email_body,$headers);
return true;			
?>