

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
        tarea.textContent = texto;
        lista.appendChild(tarea);
        tarea.classList.add("tarea");
        tarea.id = "tarea" + Date.now()

        /* Modificar */
        let btnM = document.createElement('button')
        btnM.classList.add("btnM")
        btnM.innerText = "Mod"
        tarea.appendChild(btnM)
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
    }
    /* Dejo el input en blanco  */
    input.value = ""
    input.focus()
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); // evita submit
            agregar();          // llama a tu función existente
        }
    });
});
