let modal = document.getElementById("modal-comment");

// Obtener el botón que abre el modal
let btn = document.getElementById("btn-comment");

// Obtener el botón de cerrar
let span = document.getElementsByClassName("close")[0];

// Obtener el formulario de comentarios
let commentForm = document.getElementById("comment-form");

// Obtener la lista de comentarios
let commentList = document.getElementById("comment-list");


let submitBtn = document.getElementById("submit-btn");
let commentField = document.getElementById("comment");


// Cuando se haga clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando se haga clic en el botón de cerrar, cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Cuando se escriba en el cuadro de comentarios
commentField.addEventListener("input", function() {
    // Si el cuadro de comentarios tiene contenido, habilitar el botón y cambiar el color
    if (commentField.value.trim() !== "") {
      submitBtn.disabled = false;
      submitBtn.classList.add("active");
    }
    // De lo contrario, deshabilitar el botón y volver al color original
    else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("active");
    }
  });
  


// Cuando se envíe el formulario de comentarios
commentForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir que se recargue la página

  // Obtener los valores de los campos de formulario
  let name = document.getElementById("name").value;
  let comment = document.getElementById("comment").value;

  // Crear el elemento de comentario
  let commentElement = document.createElement("div");
  commentElement.innerHTML = "<h3>" + name + "</h3><p>" + comment + "</p>";

  // Agregar el elemento de comentario a la lista de comentarios
  commentList.appendChild(commentElement);

  // Cerrar el modal de comentarios
  modal.style.display = "none";

  // Limpiar los campos del formulario
  commentForm.reset();
});
