// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarCaja() 
{
    document.querySelector('#amigo').value = '';
}

function limpiarAmigos()
{
    amigos = [];
}

function limpiarLista()
{
    let listaAmigo = document.querySelector('#listaAmigos');
    listaAmigo.innerHTML = '';
    listaAmigo.style.fontWeight = 'initial';
    listaAmigo.style.fontSize = 'initial';
    listaAmigo.style.color = 'initial'; 
}

function agregarAmigo() 
{
    limpiarLista();
    let nombreAmigo = document.querySelector('#amigo').value;
    if (nombreAmigo === '')
    {
        alert('Por favor, inserte un nombre.');
        return
    }

    amigos.push(nombreAmigo);
    limpiarCaja();
    mostrarAmigos();
}

function mostrarAmigos()
{
    let listaAmigo = document.querySelector('#listaAmigos');
    listaAmigo.innerHTML = '';

    for (let i = 0; i < amigos.length; i++)
    {
        let amigoItem = document.createElement('li');
        amigoItem.textContent = amigos[i];
        listaAmigo.appendChild(amigoItem);
    }
}

function sortearAmigo() 
{
    if (amigos.length < 2) {
        alert('Por favor, inserte al menos dos amigos para realizar el sorteo.');
        return;
    }

    let listaAmigo = document.querySelector('#listaAmigos');
    listaAmigo.innerHTML = '';

    let amigo = amigos[Math.floor(Math.random() * amigos.length)];
    listaAmigo.textContent = `El amigo secreto sorteado es: ${amigo}`;
    listaAmigo.style.fontWeight = 'bold';
    listaAmigo.style.fontSize = '20px';
    listaAmigo.style.color = '#22ff00ff';
    limpiarCaja();
    limpiarAmigos();
}