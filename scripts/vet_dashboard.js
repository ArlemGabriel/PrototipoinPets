//se llamas a las funciones 


/* 
    Configura las variables del perfil
*/
function cargarPerfil(){
    //se obtiene las variables 
    vet_name="Arlem Gabriel";
    vet_lastname="Brenes Aguilar";
    email="jogabra16@gmail.com";
    vet_identity = "115510284";
    vet_code = "1220-115510284"
    $("#vet_name").html("<b>"+vet_name+"</B>"+vet_lastname);
    $("#vet_email").html("<i class='icon icon-mail'></i> "+email);
    $("#vet_identity").html("<i class='icon icon-identity'></i> "+vet_identity);
    $("#vet_code").html("<i class='icon icon-vetcode'></i> "+vet_code);
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


cargarPerfil();
cargarMascotas();