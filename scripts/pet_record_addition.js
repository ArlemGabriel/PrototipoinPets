
//cara la info de la mascota
function cargarInfoMascota(){
    //se obtiene las variables necesarias
    var imgagen="https://misanimales.com/wp-content/uploads/2015/02/labrador-retriever.jpg"
    var nombreMascota="Puppy";
    var tagMascota="4577";
    var tipo="Perro";
    var raza="Labrador"
    var genero="Macho";
    var birth="25/02/2018";
    var infoAdiconal="Aca va todo el contenido de la informacion de la mascota"

    $("#id_img").attr("src",imgagen);
    $("#id_mascota").html("<b>"+nombreMascota+"</B>"+" / #"+tagMascota);

    $("#id_birth").html("<i class='fa fa-birthday-cake'></i>"+" "+birth);
    $("#id_genero").html("<i class='fas fa-venus-mars'></i>"+" "+genero);
    $("#id_raza").html("<i class='fas fa-paw'></i>"+" "+tipo + " / "+raza);
    
    $("#id_texto").html(infoAdiconal);

}

function cargarRegistroMedico(){
    var html=[]

    for(var i=0;i<1;i++){
        
        //se obtienen las variables 
        var titulo="Diezepam";
        var cantidad="30 mg";
        var vet="Carlos Alvarado"
        var fecha="25/05/2019"
        var descripcion="Aca va la descripcion del tratamiento"
        var peso="15 kg";
        var temperatura="35ºC"

        html.push(construirTratamiento(titulo,cantidad,vet,fecha,descripcion));
        html.push(construirInyectable(titulo,cantidad,vet,fecha,descripcion));
        html.push(contruirDiagnostico(titulo,vet,fecha,descripcion,peso,temperatura));
        
    }
        
    
    $('#contenedorDiagnosticos').append(html)    
}

function construirTratamiento(titulo,cantidad,vet,fecha,descripcion){
    
var myvar = '<div class="contenedorMascota">'+
'                        <div class="row">'+
'                            <div class="col-md-8">'+
'                                <h4 style="display: inline;" ><i class=\'fas fa-capsules\' ></i></h4>'+
'                                <h1 style="display: inline;">'+titulo+' <b>'+cantidad+'</b></h1>'+
'                            </div>'+
'                            <div class="col-md-2">'+
'                                    <h4 style="display: inline;" ><i class=\'fas fa-user-md\' ></i>'+vet+'</h4>'+
'                            </div>'+
'                            <div class="col-md-2">'+
'                                    <h4  style="display: inline;"><i class=\'far fa-calendar-alt\'></i> '+fecha+'</h4>'+
'                                    '+
'                            </div>'+
'                        </div>'+
'                        <hr>'+
'                        <h4>'+descripcion+'</h4>'+
'                </div>';
	
return myvar;

}

function construirInyectable(titulo,cantidad,vet,fecha,descripcion){
    
var myvar = '<div class="contenedorMascota">'+
'                    <div class="row">'+
'                        <div class="col-md-8">'+
'                            <h4 style="display: inline;" ><i class=\'fas fa-syringe\' ></i></h4>'+
'                            <h1 style="display: inline;">'+titulo+' <b>'+cantidad+'</b></h1>'+
'                        </div>'+
'                        <div class="col-md-2">'+
'                                <h4 style="display: inline;" ><i class=\'fas fa-user-md\' ></i>'+vet+'</h4>'+
'                        </div>'+
'                        <div class="col-md-2">'+
'                                <h4  style="display: inline;"><i class=\'far fa-calendar-alt\'></i> '+fecha+'</h4>'+
'                                '+
'                        </div>'+
'                    </div>'+
'                    <hr>'+
'                    <h4>'+descripcion+'</h4>'+
'                </div>';
	
    return myvar;
}

function contruirDiagnostico(titulo,vet,fecha,descripcion,peso,temperatura){
    
var myvar = '<div class="contenedorMascota">'+
'                    <div class="row">'+
'                        <div class="col-md-6">'+
'                            <h4 style="display: inline;" ><i class=\'fas fa-notes-medical\' ></i></h4>'+
'                            <h1 style="display: inline;">'+titulo+'</h1>'+
'                        </div>'+
'                        <div class="col-md-1">'+
'                            <h4 style="display: inline;" ><i class=\'fas fa-thermometer\' ></i>'+temperatura+'</h4>'+
'                        </div>'+
'                        <div class="col-md-1">'+
'                            <h4 style="display: inline;" ><i class=\'fas fa-weight\' ></i>'+peso+'</h4>'+
'                        </div>'+
'                        <div class="col-md-2">'+
'                                <h4 style="display: inline;" ><i class=\'fas fa-user-md\' ></i>'+vet+'</h4>'+
'                        </div>'+
'                        <div class="col-md-2">'+
'                                <h4  style="display: inline;"><i class=\'far fa-calendar-alt\'></i>'+fecha+'</h4>                               '+
'                        </div>'+
'                    </div>'+
'                    <hr>'+
'                    <h4>'+descripcion+'</h4>'+
'                </div>';
	
    return myvar
}


function cmbChange(sel){
    var valor=sel.value;
    if(valor=="Diagnóstico"){
        var myvar = '<div class="row" style="margin-bottom: 10px;">'+
        '                            <div class="col-md-1 align-self-center">'+
        '                                <h3><i class=\'fas fa-thermometer\'></i></h3>'+
        '                            </div>'+
        '                            <div  class="col-md-5" >'+
        '                                <input class="texfieldModal">'+
        '                            </div >'+
        '                            <div class="col-md-1 align-self-center">'+
        '                                <h3><i class=\'fas fa-weight\'></i></h3>'+
        '                            </div>'+
        '                            <div  class="col-md-5" >'+
        '                                <input class="texfieldModal">'+
        '                            </div >'+
        '                        </div>';
            

        $("#divDiagnostico").html(myvar)
    }
    else{
        $("#divDiagnostico").html("")
    }
    
}



cargarRegistroMedico();
cargarInfoMascota();