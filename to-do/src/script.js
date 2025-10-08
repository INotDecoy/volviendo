

function agregar() {
    /* inicializo loos datos */
    let lista = document.getElementById("lista");
    let tarea = document.createElement('li')
    let texto = document.getElementById("input").value.trim();
    /* Creando li  */
    if (texto === ""){
        alert ("Ingresa una tarea")
        return
    }else{
        tarea.classList.add("tarea");
        tarea.id = "tarea" + Date.now();
       
        // Checkbox
        let check = document.createElement('input');
        check.type = 'checkbox';
        check.classList.add('check');
        tarea.appendChild(check);

        // Texto de la tarea (SOLO UNA VEZ)
        let span = document.createElement('span');
        span.textContent = texto;
        tarea.appendChild(span);

        // Detectar cuando se marca
        check.addEventListener('change', () => {
            tarea.classList.toggle('completada', check.checked);
        });

        /* Modificar */
        let btnM = document.createElement('button')
        btnM.classList.add("btnM")
        btnM.innerText = "Mod"
        tarea.appendChild(btnM)
        btnM.type = "button"
        btnM.onclick = () => {
            const mod = prompt("Modifica el Texto", tarea.firstChild.textContent);
            if (mod !== null) {
                tarea.firstChild.textContent = mod;
            }
        }
        
        /* Eliminar */
        let btn = document.createElement('button')
        btn.classList.add ("btnX")
        btn.innerText = "X"
        tarea.appendChild(btn)
        btn.onclick = () => {
            tarea.remove();
        }


        let botones = document.createElement('div');
        botones.classList.add('botones');
        botones.appendChild(btnM);
        botones.appendChild(btn);
        tarea.appendChild(botones)
        lista.appendChild(tarea);
    }
    /* Dejo el input en blanco  */
    input.value = ""
    input.focus()
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    let btnAgregar = document.getElementById("agregar");
    btnAgregar.addEventListener("click", agregar)
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" ) {
            e.preventDefault(); // evita submit
            agregar();          // llama a tu función existente
        }
    });
});

function borrarTodo() {
    let tareas = document.querySelectorAll("li")
    tareas.forEach(li => {
        li.remove();        
    });
}


let tar = document.getElementById("tarea")
tar.onclick = () => {
    tar.classList.toggle("completada");
};

