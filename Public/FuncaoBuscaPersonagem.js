async function buscarPersonagem() {

    
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Buscando...";

    try {
        const res = await fetch(`/personagem?nome=${encodeURIComponent(nome)}`);
        const data = await res.json();

        if (res.status !== 200) {
            resultado.innerHTML = `<p style="color: red;">${data.erro}</p>`;
            return;
        }

        resultado.innerHTML = `
          <img src="${data.imagem}" alt="${data.nome}" width="250" style="border-radius: 10px" />
          <h2>${data.nome}</h2>
          <p>${data.descricao}</p>
        `;
    } catch (err) {
        resultado.innerHTML = `<p style="color: red;">Erro na busca.</p>`;
        console.error(err);
    }
}

window.FuncaoBuscaPersonagem = { buscarPersonagem };