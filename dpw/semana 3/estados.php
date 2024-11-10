<?php
header('Content-Type: application/json');
include "dbcontext.php";
if($_POST['lista']=="todos"){
    $con=conectar();
    $sql="select * from estados";
    $rs= $con-> query($sql);
    $estados[];
    while ($row =->$rsfetch_assoc())
        $estados[]=$row;
        echo json_encode($estados);
        # code...
    }
?>