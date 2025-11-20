oscuro = true;

$("#oscuro").click(function(){
    cambiarTema();
});
    
function cambiarTema(){
    if(oscuro){
        $("body").attr("data-bs-theme","light");
        $("#caja-hero").removeClass( "bg-dark" ).addClass( "bg-light" );
    }else {
        $("body").attr("data-bs-theme","dark");
        $("#caja-hero").removeClass( "bg-light" ).addClass( "bg-dark" );
    }
    oscuro = !oscuro
}