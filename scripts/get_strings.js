async function obtenerSexos(){
    const response = await fetch("https://inpets-api.herokuapp.com/strings");
    const json = await response.json();
    if(json.success){
        return json.sexes;
    } else{
        throw json.errors;
    }
}

async function obtenerEspecies(){
    const response = await fetch("https://inpets-api.herokuapp.com/strings");
    /*const json = await response.json();
    if(json.success){
        return json.species;
    } else{
        throw json.errors;
    }*/
}
