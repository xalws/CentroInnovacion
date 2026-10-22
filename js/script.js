document.addEventListener("DOMContentLoaded", function () {
  // Hora
  function actualizarHora() {
    const dia = new Date();
    let hora = dia.getHours();
    let minutos = dia.getMinutes();
    let segundos = dia.getSeconds();

    // Normalizar a formato 12 hrs
    const ampm = hora >= 12 ? "PM" : "AM";
    hora = hora % 12;
    hora = hora ? hora : 12;

    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;

    // Poner la hora
    document.getElementById("reloj").innerHTML =
      `Hora actual: ${hora}:${minutos}:${segundos} ${ampm}`;
  }

  // Actualizar cada segundo
  actualizarHora();
  setInterval(actualizarHora, 1000);

  // Formulario
  const formulario = document.querySelector("form");

  if (formulario) {
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("Nombre").value.trim();
      const correo = document.getElementById("Correo").value.trim();
      const telefono = document.getElementById("Telefono").value.trim();
      const descripcion = document.getElementById("descripcion").value;

      if (
        nombre === "" ||
        correo === "" ||
        telefono === "" ||
        descripcion === ""
      ) {
        alert(
          "Por favor, completa todos los campos obligatorios antes de enviar la solicitud.",
        );
        return;
      }

      // Guardar
      const datosSolicitud = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        descripcion: descripcion,
      };

      localStorage.setItem("Altavira", JSON.stringify(datosSolicitud));

      alert("Solicitud enviada, Un asesor de Altavira se comunicará contigo.");
      formulario.reset();
    });
  }

  // Seleccionar los elementos del DOM
  const textarea = document.getElementById("descripcion");
  const contador = document.getElementById("contador-caracteres");

  // Función para actualizar el conteo
  function actualizarConteo() {
    const longitud = textarea.value.length;
    contador.textContent = longitud; 
  }

  textarea.addEventListener("input", actualizarConteo);

  actualizarConteo();
});
