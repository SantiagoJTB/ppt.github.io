function chooseOption(playerChoice) {
    const options = ['piedra', 'papel', 'tijeras'];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    const result = determineWinner(playerChoice, computerChoice);

    // Actualiza el resultado en el elemento HTML resultElement
    var resultElement = document.getElementById('result');
    resultElement.style.fontFamily = 'Baloo Tamma, sans-serif';
    resultElement.innerText = `Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;

    // Llama a openModal con el resultado
    console.log("Llamando a openModal desde chooseOption");
    openModal(result, playerChoice, computerChoice);
}

function openModal(result, playerChoice, computerChoice) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalText = document.getElementById('modalText');
    var resultElement = document.getElementById('result'); // Agregado

    // Mostrar imágenes específicas para cada combinación de opciones
    switch (playerChoice.toLowerCase() + '-' + computerChoice.toLowerCase()) {
        case 'piedra-tijeras':
        case 'tijeras-piedra':
            modalImage.src = 'images/pierde_tijera.jpg';
            break;
        case 'papel-piedra':
        case 'piedra-papel':
            modalImage.src = 'images/gana_papel.jpg';
            break;
        case 'tijeras-papel':
        case 'papel-tijeras':
            modalImage.src = 'images/pierde_papel.jpg';
            break;
        case 'piedra-piedra':
            modalImage.src = 'images/empate_piedra.jpg';
            break;
        case 'papel-papel':
            modalImage.src = 'images/empate_papel.png';
            break;
        case 'tijeras-tijeras':
            modalImage.src = 'images/empate_tijeras.jpg';
            break;
        default:
            // Puedes agregar una imagen predeterminada si es necesario
            modalImage.src = 'default.jpg';
            break;
    }

    // Muestra el mensaje en la ventana emergente modalText
    console.log("Actualizando modalText");
    modalText.innerText = result;

    // Actualiza el resultado en el elemento HTML resultElement
    resultElement.style.fontFamily = 'Baloo Tamma, sans-serif';
    resultElement.innerText = `Elegiste ${playerChoice}. La computadora eligió ${computerChoice}. ${result}`;

    // Muestra el modal
    console.log("Abriendo modal");
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Es un empate.';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijeras') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijeras' && computerChoice === 'papel')
    ) {
        return '¡Ganaste!';
    } else {
        return '¡Perdiste! Intenta de nuevo.';
    }
}
