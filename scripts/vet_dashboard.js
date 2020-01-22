//se llamas a las funciones 


/* 
    Configura las variables del perfil
*/
function cargarPerfil(){
    //se obtiene las variables 
    vetNombre="Arlem Gabriel";
    vetApellido="Brenes Aguilar";
    correo="jogabra16@gmail.com";
    vetCedula= "115510284";
    vetCodigo = "1220-115510284"
    $("#vetNombre").html("<b>"+vetNombre+"</B>"+vetApellido);
    $("#vetCorreo").html("<i class='icon icon-mail'></i> "+correo);
    $("#vetCedula").html("<i class='icon icon-identity'></i> "+vetCedula);
    $("#vetCodigo").html("<i class='icon icon-vetcode'></i> "+vetCodigo);
    $("#vetNotificaciones").html(buscarNotificaciones);
    
}
function buscarNotificaciones(){
    // Se obtienen las notificaciones y si hay entonces se muestra el icono de que hay notificaciones
    // Si no hay notificaciones se muestra el icono de que no hay notificaciones
    var notificaciones;
    if(true){
        notificaciones = '<h2 style = "color: green;"> Tiene notificaciones <a style="text-align: right;" id="vetNotificaciones" data-toggle="modal" data-target="#modalNotificaciones" onclick="cargarNotificaciones()">'+"<i class='icon icon-bell-on'></i> "+'</a></h2>';
        return notificaciones;
    }else{
        notificaciones = ' No tiene notificaciones  <a style="text-align: right;" id="vetNotificaciones" data-toggle="modal" data-target="#modalNotificaciones" onclick="cargarNotificaciones()">'+"<i class='icon icon-bell-off'></i> "+'</a>';
    }
}

/*
    Obtiene y carga las mascotas de un usuario
*/
function cargarMascotas(){
    var html=[]

    for(var i=0;i<5;i++){
        console.log("entre");
        //se obtienen las variables necesarias 
        var nombreMascota="Mascota 1";
        var img="https://arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/CD5DKS2JJVHFFMGMNOXOGDNWNY.jpg";
        var idMascota="777";
        var genero="Macho";
        var tipo="Perro";
        var raza="Labrador";

        //se construye el html 

        var myvar = '<div class="contenedorMascota">'+
        '                        <div class="row">'+
        '                            <div class="col-md-2">'+
        '                                <img class="imgMascota" src="'+img+'" alt="imagenMascota">'+
        '                            </div>'+
        '                            <div class="col-md-10">'+
        '                                <div class="row">'+
        '                                    <div class="col-md-10"> '+
        '                                        <div class="row">'+
        '                                            <h3><b id="pet_name">'+nombreMascota+'</b> #'+idMascota+'</h3>'+
        '                                        </div>  '+
        '                                    </div>'+
        '                                    <div class="col-md-2">'+
        '                                        <div class="float-right">'+
        '                                            <a id="icon_view"> <i class=\'icon icon-pet-profile\'></i> </a>'+
        '                                        </div>'+
        '                                        '+
        '                                    </div>'+
        '                                </div>'+
        '                                <hr>'+
        '                                <div class="row">'+
        '                                    <h3><i class=\'icon icon-pet-gender\'></i> '+genero+'  <i class=\'icon icon-pet-breed\'></i>'+tipo+' / <b>'+raza+'</b></h3>'+
        '                                    <h3></h3>'+
        '                                </div>'+
        '                            </div>'+
        '                        </div>        '+
        '                    </div>';
        html.push(myvar);
        
    }

    
    $('#contenedor_mascotas').append(html)

}
/*
    Abre el editar pefil y carga los datos actuales
*/
function abrirEditarPerfil(){
    //carga las variables para mostrarlas
    vetNombre="Arlem Gabriel";
    vetApellido="Brenes Aguilar";
    correo="jogabra16@gmail.com";
    vetCedula= "115510284";
    vetCodigo = "1220-115510284"
    //muestra las variables en los campos
    $("#modalNombre").val(vetNombre);
    $("#modalApellidos").val(vetApellido);
    $("#modalCorreo").val(correo);
    $("#modalCedula").val(vetCedula);
    $("#modalCodigoVeterinario").val(vetCodigo);
}

/*
    guarda los nuevos datos del perfil
*/
function modificarPerfil(){

}

/*
    carga las notificaciones del veterinario
*/
function cargarNotificaciones(){

}

/*
    envia solicitud de acceso
*/
function solicitarAcceso(){

}

/*
    envia solicitud de acceso
*/
function buscarMascota(){

}

cargarPerfil();
cargarMascotas();