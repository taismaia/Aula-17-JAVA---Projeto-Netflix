const formulario = document.querySelector("#formulario")
const buscar = document.querySelector("#buscar")
const resultado = document.querySelector("#resultado")
const filmes = document.querySelector("#filmes")

async function buscarFilmes(){
    const resposta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=77c4e2b070a2e1396500d0b42ebf7cec&language=pt-BR")
    const dados = await resposta.json()
    dados.results.forEach((filme_da_vez)=>{
        const nova_div = document.createElement("div")

        nova_div.innerHTML = `
        <h2>${filme_da_vez.title}</h2>
        <img src="https://image.tmdb.org/t/p/w500${filme_da_vez.poster_path}">
        `
        
        resultado.append(nova_div)
    })
}

buscarFilmes()

