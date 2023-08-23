import { conectaApi } from "./conectaApi.js";

const tema = document.getElementById('tema')
const texto = document.querySelector('.frase');
const autor = document.querySelector('.autor')
const btn = document.getElementById('nova-frase')

gerarFrase(tema.value);

async function gerarFrase(tema) {
    const frase = await buscarFrase(tema)
    texto.textContent = `"${frase.texto}"`;
    autor.textContent = `'${frase.autor}'`;
}

async function buscarFrase(tema) {
    const frases = await conectaApi(tema);
    const frase = await frases.frases [Math.floor(Math.random() * frases.frases.length)]
    return frase;
}

btn.addEventListener('click' , async () => {
    gerarFrase(tema.value)
});
