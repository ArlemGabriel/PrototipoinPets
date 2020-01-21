//se llamas a las funciones 


/* 
    Configura las variables del perfil
*/
function cargarPerfil(){
    //se obtiene las variables 
    uwner_name="Jean Anthony";
    uwner_lastname="Vega Díaz";
    email="jean0798@gmail.com";
    $("#user_name").html("<b>"+uwner_name+"</B>"+uwner_lastname);
    $("#user_email").html("<i class='fas fa-envelope'></i> "+email);
}


/*
    Obtiene y carga las mascotas de un usuario
*/
function cargarMascotas(){
    var html=[]

    for(var i=0;i<5;i++){
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
        '                                            <a id="icon_view"> <i class=\'far fa-id-card\'></i> </a>'+
        '                                        </div>'+
        '                                        '+
        '                                    </div>'+
        '                                </div>'+
        '                                <hr>'+
        '                                <div class="row">'+
        '                                    <h3><i class=\'fas fa-venus-mars\'></i> '+genero+'  <i class=\'fas fa-paw\'></i>'+tipo+' / <b>'+raza+'</b></h3>'+
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
   abre los permisos acutales del usuarios
*/
function abrirPermisos(){

    var html=[]

    for(var i=0;i<3;i++){
        //se obtienen las variables necesarias 
        var nombreMascota="Puppy";
        var idMascota="5485";
        var veterinario="Elmer Figueroa";
        var myvar = '<div class="contenedorPermisos">'+
'                        <div class="row">'+
'                            <div class="col-md-8">'+
'                                <h4><i class=\'fas fa-user-md\'></i>'+veterinario+'</h4>'+
'                                <h4><i class=\'fas fa-paw\'></i>'+nombreMascota+' # '+idMascota+'</h4>'+
'                            </div>'+
'                            <div class="col-md-4 align-self-center"><button class="buttonRed" onclick="revocarAcceso()">Revocar acceso</button></div>'+
'                        </div>'+
'                    </div>';
        html.push(myvar)
    }

    $('#contenedormodaPermisos').append(html)

}


/*
    Revoca los permisos de un veterinario a una mascotas
*/
function revocarAcceso(){

}


/*
    Abre el editar pefil y carga los datos actuales
*/
function abrirEditarPerfil(){
    //carga las variables para mostrarlas
    var nombre="Jean Anthony";
    var apellidos="Vega Diaz";
    var correo="Jean0798@gmail.com";
    //muestra las variables en los campos
    $("#modalNombre").val(nombre);
    $("#modalApellidos").val(apellidos);
    $("#modalCorreo").val(correo);
}

/*
    guarda los nuevos datos del perfil
*/
function modificarPerfil(){

}




/*
    Abre y carga las notificaciones en el modal
*/
function abrirNotificaciones(){

    var html=[]

    for(var i=0;i<3;i++){
        //se obtienen las variables necesarias 
        var nombreMascota="Puppy";
        var idMascota="5485";
        var veterinario="Elmer Figueroa";

        var myvar = '<div class="contenedorPermisos">'+
        '                        <div class="row">'+
        '                            <div class="col-md-8">'+
        '                                <h4><i class=\'fas fa-user-md\'></i>'+veterinario+'</h4>'+
        '                                <h4><i class=\'fas fa-paw\'></i>'+nombreMascota+' #'+idMascota+'</h4>'+
        '                            </div>'+
        '                            <div class="col-md-4">'+
        '                                <div>'+
        '                                    <button class="buttonGreen" onclick="aceptarNotificacion()">Aceptar</button>'+
        '                                    <button class="buttonRed" onclick="descartarNotificacion()">Eliminar</button>'+
        '                                </div>'+
        '                                '+
        '                            </div>'+
        '                        </div>'+
        '                    </div>';
	


        html.push(myvar)
    }
    $('#contenedormodalNotificaciones').append(html)
}


/*
    Acepta o descarta la notificacion
*/

function aceptarNotificacion(){

}

function descartarNotificacion(){

}



/*
    Agrega una nueva mascota
*/
function agregarMascota(){

}


/*
    Realiza la funcion de buscar mascota
*/
function buscarMascota(){
    var busqueda = $("#input_search").val();

    //se realiza la busqueda
}






cargarPerfil();
cargarMascotas();
abrirPermisos();