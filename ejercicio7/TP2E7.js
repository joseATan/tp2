
async function mostrar() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.ok) {
    console.log("¡Llegaron los datos!");

    const personas = await res.json();
    const listado = recuperarDatos("listado");
    personas.forEach((persona) => {
      const item = document.createElement("li");
      item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;
      listado.appendChild(item);
      const boton = document.createElement("button");
      // Corrección: Cambiar "onclick" por "click"
      boton.addEventListener("click", async () => {
        const personaId = persona.id;
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${personaId}/todos`);
        if (res.ok) {
          console.log("¡Llegaron los datos de las tareas!");

          const todos = await res.json();
          const tareas = recuperarDatos("todos");
          tareas.innerHTML = '';
          todos.forEach((todo) => {
            const itemTarea = document.createElement("li");
            itemTarea.textContent = `${todo.id} - ${todo.title}`;
            itemTarea.className = todo.completed ? "valido" : "error";
            tareas.appendChild(itemTarea);
          });
        }
      });
      boton.textContent = "Ver tareas";
      item.appendChild(boton);
    });
  } else {
    console.error("Error: no llegaron los datos");
  }
}

function recuperarDatos(elemento) {
  return document.getElementById(elemento);

}

document.addEventListener("DOMContentLoaded", async (event) => {
  
  const formulario = recuperarDatos("formulario");
  formulario.addEventListener("submit", (e) => {
    //Enviar formulario
    e.preventDefault();
  });
  await mostrar();

});