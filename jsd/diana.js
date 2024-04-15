if (23 == edad) {
    console.log("es verdadero")
} else if (24==edad) {
    console.log("Es cumplañera");
} else {
    console.log("Pues quien sabe");
}

function agregarFuncion(){
    var nombre = document.getElementById("nombre").value 
    var edad = document.getElementById("edad").value
    var email = document.getElementById("email").value
    var fecha = document.getElementById("fecha").value


    var json = {
        "nombre": nombre,
        "edad" : parseInt(edad),
        "email" : email,
        "fecha" : fecha
    };
    console.log("Json:", json)
    console.log("El nombre es:", json.nombre)
    console.log("Tu edad es:", json.edad)
    console.log("Tu email es:", json.email)
    console.log("La fecha es:", json.fecha)

    switch (json.edad) {
        case 18:
            console.log("Es mayor de edad");
            break;
        case 17:
            console.log("Es menor de edad");
            break
    
        default:
            console.log("defecto");
            break;
    }
}

