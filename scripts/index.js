function login(){
    var user=$('#exampleInputEmail1').val()
    var pass=$('#exampleInputPassword1').val()
    var tipo=$('#selectorID').val()
    //var selObj = document.getElementById("selectorID");
    //var tipo = selObj.options[selObj.selectedIndex].text;

    var api="";
    var navigate=""
    if(user && pass){
        console.log(tipo)
        if(tipo=="owner"){
            api="users/owners/sessions"
            navigate="\owner_dashboard.html"
        }else{
            api="users/vets/sessions"
            navigate="\vet_dashboard.html";
        }

        const proxyurl = "https://cors-anywhere.herokuapp.com/";

                fetch(proxyurl+"http://inpets-api.herokuapp.com/"+api, { 
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type" : "application/json; charset=UTF-8",
                        "Access-Control-Allow-Origin":"*"
                    }, 
                    "body": JSON.stringify({    "email": user,
                                                "password": pass }) 
                })
                .then(response => { return response.json() })
                .then(json => { 
                    console.log(json)
                    res=json["success"];
                    error=json["error"];
                    if(res){
                        $("#indexAlertMessage").html('')
                        var win = window.open(navigate,"_self");
                    }
                    else{
                        if(error=="AUTHENTICATION_FAILED"){
                            $("#indexAlertMessage").html('<div class="alert alert-danger" role="alert">Error de autenticación</div>')
                        }
                        else{
                            $("#indexAlertMessage").html('<div class="alert alert-danger" role="alert">¡Error con el servidor!</div>')
                        }
                    }
                })
                .catch(error => { console.log(error); });
    }else{
        $("#indexAlertMessage").html('<div class="alert alert-danger" role="alert">Complete todos los datos</div>');
    }
}