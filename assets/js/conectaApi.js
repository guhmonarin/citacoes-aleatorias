export async function conectaApi (tema) {
    const api = await fetch(`https://pensador-api.vercel.app/?term=${tema}&max=100`);
    const frases = await api.json();
    return frases;
}
