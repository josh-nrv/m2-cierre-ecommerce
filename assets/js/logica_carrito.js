
$(".btn-eliminar").click(function(){
    let confirmacion = confirm("¿Está seguro que desea eliminar el producto?\nPara confirmar presione aceptar.");

    if(confirmacion){
        alert("Producto eliminado correctamente");
    }
});