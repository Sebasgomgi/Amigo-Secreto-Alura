// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    //Valor de la casilla amigo
    const input = document.getElementById("amigo");
    const amigo = input.value.trim();

    //Verificar que no esté vacio, repetido o más de 10 amigos
    if (amigo == "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert("Este nombre ya ha sido ingresado. Por favor, ingresa un nombre diferente.");
        input.value = "";
        return;
    }

    if (listaAmigos.length >= 10) {
        alert("Ya se han ingresado 10 amigos. No se pueden agregar más.");
        return;
    }

    //Agregar a la variables array
    listaAmigos.push(amigo);
    input.value = ""; // Limpiar el campo de entrada

    //Actualizar lista
    actualizarLista();
}

function actualizarLista() {
    //Lista amigos en el HTML
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpiar la lista actual para no agregar de más

    //Recorrer la lista y actualizar
    //forEach es equivalente al for con un iterador i, listaAmigos[i]
    listaAmigos.forEach(amigo => {
        //Crear un elemento listado en el HTML
        const friend = document.createElement("li");
        friend.textContent = amigo;
        //Agregamos al amigo al final de la lista
        listaElement.appendChild(friend);
    });
}

function sortearAmigo() {

    //Verificar que la lista no esté vacia
    if (listaAmigos.length == 0) {
        alert("Agregue por lo menos dos amigos")
    }

    if (listaAmigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

    //Floor para hacer función piso y random por el número de participantes
    const indice = Math.floor(Math.random() * listaAmigos.length);
    //Amigo con indice aleatorio de la lista amigos
    const amigoSorteado = listaAmigos[indice];

    //Mostrar amigo sorteado en verde
    const amigoElegido = document.getElementById("resultado");
    amigoElegido.innerHTML = `<li style="color: green; font-weight: bold;">El amigo secreto sorteado es: ${amigoSorteado}`
}
