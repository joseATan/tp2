
    async function mostrar() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (res.ok) {
        console.log("llegaron los datos!");

        const personas = await res.json();
        console.log(personas);
        const listado = recuperarDatos("listado");
        personas.forEach((persona) => {
          const item = document.createElement("li");
          item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;
          listado.appendChild(item);
          const boton = document.createElement("button");
          boton.textContent = "Ver tareas";
          item.appendChild(boton);
        });
      } else {
        console.error("Error: no llegaron los datos");
      }
    };

    function recuperarDatos(elemento) {
      return document.getElementById(elemento);
    }
    document.addEventListener("DOMContentLoaded", async (event)=>{
        await mostrar();
    });
    
    
  