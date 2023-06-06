//codigo del formulario
// obtengo las variables
function validar() {


    let nombre = document.getElementById('nombre');
    console.log("Nombre: ", nombre);
    let apellido = document.getElementById('apellido');
    console.log("Apellido: ", apellido);
    let email = document.getElementById('email');
    let patron = /^[A-Za-z0-9-_]+@[A-Za-z]+.[A-Za-z]+.[A-Za-z]+$/;
    let mensaje = document.getElementById('mensaje');
    console.log("Mensaje: ", mensaje);
  
  
   
    //verificaciones
  
    if (nombre.value.trim() === "" || nombre.value.length < 3) {
      document.querySelector('#errorNombre').style.display = 'inline';
      nombre.focus();
      return false;
    } else {
      document.querySelector('#errorNombre').style.display = 'none';
    }
  
    if (apellido.value.trim() === "" || apellido.value.length < 3) {
      document.querySelector('#errorApellido').style.display = 'inline';
      apellido.focus();
      return false;
    } else {
      document.querySelector('#errorApellido').style.display = 'none';
  
  
      if (!patron.test(email.value) || email.value.trim() === "") {
        document.querySelector('#errorEmail').style.display = 'inline';
        email.focus();
        return false;
      } else {
        document.querySelector('#errorEmail').style.display = 'none';
      }
  
  
      let respuestas = document.getElementById('respuestas');
      respuestas.innerHTML = '¡Datos ingresados correctamente!';
      let parrafoNombre = document.createElement('p');
      parrafoNombre.innerHTML = "Nombre: " + nombre.value;
      respuestas.appendChild(parrafoNombre);
      let parrafoApellido = document.createElement('p');
      parrafoApellido.innerHTML = "Apellido: " + apellido.value;
      respuestas.appendChild(parrafoNombre);
  
      //
      let parrafoEmail = document.createElement('p');
      parrafoEmail.innerHTML = "Email: " + email.value;
      respuestas.appendChild(parrafoEmail);
  
      let parrafoMensaje = document.createElement('p');
      parrafoMensaje.innerHTML = "Mensaje: " + mensaje.value;
      respuestas.appendChild(parrafoMensaje);
      nombre.value = "";
      apellido.value = "";
      email.value = "";
      mensaje.value = "";
      return false;
      
      // reseteo el form
      form.reset();
    }
}