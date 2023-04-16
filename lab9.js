// Obtener el modal
let modal = document.getElementById("modal-comment");

// Obtener el botón que abre el modal
let btn = document.getElementById("btn-comment");

// Obtener el botón de cerrar
let span = document.getElementsByClassName("close")[0];

// Obtener el formulario de comentarios
let commentForm = document.getElementById("comment-form");

// Obtener la lista de comentarios
let commentList = document.getElementById("comment-list");

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
