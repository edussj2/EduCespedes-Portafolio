<?php 
    include "./conexion.php";

    if(isset($_POST['nombre']) && isset($_POST['email']) && isset($_POST['proyecto']) && isset($_POST['mensaje'])){

        $nombre = $_POST['nombre'];
        $email = $_POST['email'];
        $proyecto = $_POST['proyecto'];
        $mensaje = $_POST['mensaje'];

        if(strlen($nombre) > 50 || strlen($email) > 120 || strlen($proyecto) > 50 || strlen($mensaje) > 350){
            echo "INVALID DATA";
        }else{

                $conexion->query("INSERT INTO mensaje(MensajeSujeto, MensajeEmail, MensajeProyecto, 	MensajeContenido, MensajeEstado, MensajeEliminado) VALUES('$nombre','$email','$proyecto','$mensaje','NO LEÍDO','VISIBLE')")or die($conexion->error);

                echo "SUCCESS";
        }
    }else{
       echo "NULL DATA";
    }
?>