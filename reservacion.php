<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "reservacion@yantrabar.com";
$email_subject = "Reservacion";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['dia']) ||
!isset($_POST['hora']) ||
!isset($_POST['numero_personas']) ||
!isset($_POST['telefono']) ||
!isset($_POST['mensaje']))  {

echo '<script type="text/javascript">',
				'toastr.warning("Ocurrio un inconveniente, favor de intentarlo de nuevo.");',
     '</script>'
;
die();
}


$email_message = "Reservacion de mesa:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n"; //first_name
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Mensaje: " . $_POST['mensaje'] . "\n\n";
$email_message .= "Dia: " . $_POST['dia'] . "\n\n";
$email_message .= "Hora de visita: " . $_POST['hora'] . "\n\n";
$email_message .= "Mesa para: " . $_POST['numero_personas'] . " personas. \n\n";
$email_message .= "Telefono: " . $_POST['telefono'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo '<script type="text/javascript">',
				'toastr.success("Solicitud de reservacion enviada con exito, en un momento recibiras un correo de confirmacion.");',
     '</script>'
;
}
?>