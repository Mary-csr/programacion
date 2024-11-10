<?php
include ("semana3/trabajo1.php");
$con = conectar();
echo "pagina de conexion";
if($con){
    echo "conexion exitosa";
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UFT-8">
    <meta name="viewport">
    <title>CRUD estados</title>
    <script src="htpps://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="js/index.php"></script>
</head>
<body>
<select id="estados">
        <option value="">Selecine un estado</option>
    </select>
    <br>
    <label for="estado">Nombre</label>
    <input type="text" id="estado" >
    <button id="agregar">Agregar</button>
</body>
</html>