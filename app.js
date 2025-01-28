let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo"); 
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar la entrada
    if (!nombre) {
        alert("Por favor, inserte un nombre."); 
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Mostrar la lista actualizada
    mostrarListaAmigos();
}

/**
 * Función para recorrer el array amigos y mostrarlo en la lista HTML
 */
function mostrarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el arreglo y agregar elementos a la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); 
        li.textContent = `${index + 1}. ${amigo}`; 
        lista.appendChild(li); 
    });
}

/**
 * Función para seleccionar aleatoriamente un amigo y eliminarlo de la lista
 */
function sortearAmigo() {
    const resultado = document.getElementById("resultado"); 

    // Validar que haya al menos 2 amigos disponibles
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos en la lista para poder jugar."); 
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>${amigoSorteado} ha sido seleccionado como el amigo secreto.</li>`;

    // Eliminar el amigo sorteado del arreglo
    amigos.splice(indiceAleatorio, 1);

    // Actualizar la lista de amigos en pantalla
    mostrarListaAmigos();

    // Habilitar el botón de "Nuevo sorteo"
    document.getElementById("nuevoSorteo").disabled = false;
}

//Reiniciar sorteo
function nuevoSorteo() {

    amigos = [];

    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    document.getElementById("nuevoSorteo").disabled = true;
}
