function submit2() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje');
    let mensajeValidacion = "¡Todos los campos ingresados son correctos!";
    let mensajeError = "";
    let esInvalido = false;
    if(nombre === ""|| apellido === "" ){
        //error nombre o apellido.
        mensajeError += "Nombre y apellido no pueden estar vacios.\n ";
        esInvalido = true;
    }
    if(edad < 0 || edad < 18){
        //error edad.
        mensajeError += "La edad no debe ser negativa ni debe ser menor de 18.\n ";
        esInvalido = true;
    }
    if(altura < 0 || altura > 230){
        //error altura.
        mensajeError += "La altura no debe ser negativa ni mayor a 230cm.\n ";
        esInvalido = true;
    }
    if(email === "" || !email.includes("@")){
        //error email.
        mensajeError += "El correo electronico no puede estar vacio y debe incluir @.\n ";
        esInvalido = true;
    }

    mensaje.innerText = esInvalido ? mensajeError : mensajeValidacion;
    mensaje.className = esInvalido ? 'inValido' : 'valido';
}