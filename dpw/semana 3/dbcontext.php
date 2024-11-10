<?php
function conectar (){
    $host='127.0.0.1';
    $user="root";
    $pass="12345678";
    $db="iceppracticas"
    conn=new mysqli($host,$user,$pass,$db);
    if($conn->coneect_error);{
        die("conexion fallidaa". $conn->connect_error)
    }
    return $conn;
}
?>