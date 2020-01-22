/* 
    Solicitud de registro de usuario veterinario
*/
function registrarVeterinario(){
    var nombre=$("#id_nombre").val();
    var apellido1=$("#id_apellido1").val();
    var apellido2=$("#id_apellido2").val();
    var cedula=$("#id_cedula").val();
    var codVet=$("#id_codigo_medico").val();
    var correo=$("#id_email").val();
    var contraseña1=$("#id_password").val();
    var contraseña2=$("#id_password2").val();

    $("#mensajesEror").html('')
    if(nombre && apellido1 && apellido2 && cedula && codVet && correo && contraseña1 && contraseña2){
        if(validar_email(correo)){
            if(contraseña1 == contraseña2){
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                fetch(proxyurl + "http://inpets-api.herokuapp.com/users/vets", { 
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type" : "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin":"*"
                    }, 
                    "body": JSON.stringify({ "vet": {
                                            "name": nombre,
                                            "lastname": apellido1 + " "+ apellido2 ,
                                            "country_id": parseInt(cedula),
                                            "email": correo,
                                            "vet_code": parseInt(codVet),
                                            "password": contraseña1
                                        } }) 
                })
                .then(response => { return response.json() })
                .then(json => { 
                    console.log(json)
                    res=json["success"];
                    error=json["error"];
                    if(res){
                        limpiarDatosVet();
                        $("#mensajesEror").html('<div class="alert alert-success" role="alert">Usuario registrado</div>')
                    }
                    else{
                        if(error=="EMAIL_USED"){
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">El correo ya se encuentra registrado</div>')
                        }
                        else if(error=="INCORRECT_COUNTRY_ID"){
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Verifique el numero de identificación</div>')
                        }
                        else{
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">¡Error con el servidor!</div>')
                        }
                    }
                })
                .catch(error => { console.log(error); });
                
            }
            else{
                $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Las contraseñas no coinciden</div>')
            }
        }
        else{
            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Ingrese un correo válido</div>')
        }
    }
    else{
        $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Complete todos los datos</div>')
    }

    
}


function limpiarDatosVet(){
    $("#id_nombre").val("");
    $("#id_apellido1").val("");
    $("#id_apellido2").val("");
    $("#id_codigo_medico").val("");
    $("#id_cedula").val("");
    $("#id_email").val("");
    $("#id_password").val("");
    $("#id_password2").val("");

    
}




function validar_email( email ) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

/* 
    Solicitud de registro de usuario veterinario
*/
function registrarDueño(){
    var nombre=$("#id_nombre").val();
    var apellido1=$("#id_apellido1").val();
    var apellido2=$("#id_apellido2").val();
    var correo=$("#id_email").val();
    var contraseña1=$("#id_password").val();
    var contraseña2=$("#id_password2").val();

    $("#mensajesEror").html('')
    if(nombre && apellido1 && apellido2 && correo && contraseña1 && contraseña2){
        if(validar_email(correo)){
            if(contraseña1 == contraseña2){
                const proxyurl = "https://cors-anywhere.herokuapp.com/";

                fetch(proxyurl+"http://inpets-api.herokuapp.com/users/owners", { 
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type" : "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin":"*"
                    }, 
                    "body": JSON.stringify({ "owner": {
                                            "name": nombre,
                                            "lastname": apellido1 + " " + apellido2,
                                            "email": correo,
                                            "password": contraseña1
                                        } }) 
                })
                .then(response => { return response.json() })
                .then(json => { 
                    console.log(json)
                    res=json["success"];
                    error=json["error"];
                    if(res){
                        limpiarDatosVet();
                        $("#mensajesEror").html('<div class="alert alert-success" role="alert">Usuario registrado</div>')
                    }
                    else{
                        if(error=="EMAIL_USED"){
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">El correo ya se encuentra registrado</div>')
                        }
                        else if(error=="INCORRECT_COUNTRY_ID"){
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Verifique el numero de identificación</div>')
                        }
                        else{
                            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">¡Error con el servidor!</div>')
                        }
                    }
                })
                .catch(error => { console.log(error); });
                
            }
            else{
                $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Las contraseñas no coinciden</div>')
            }
        }
        else{
            $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Ingrese un correo válido</div>')
        }
    }
    else{
        $("#mensajesEror").html('<div class="alert alert-danger" role="alert">Complete todos los datos</div>')
    }
     
}