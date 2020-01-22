
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
}




cargarInfoMascota();