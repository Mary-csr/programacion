$(document).ready(function(){
cargarEstados();
    function cargarEstados() {
        $.ajax({
            url: "crud/estados.php",
            type: "POST",
            data: {'lista' : 'todos' },
            dataType: "json",
            success: function(estados){
        $.each(estados,function(i,estado){
          $("#estados").append(
    "<option value=" + estado.idestado + ">"+ estado.nombre + "</option>");  
        });//each
            }//succes 
        });//ajax
}//funcion cargar estados
})