const poke_container = document.getElementById('poke-container')

const pokemon_count = 150

const colors = {
    fire: '#FDDfdf',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaedal',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'

}

const main_types = Object.keys(colors) 
//console.log(main_types)




const fetchPokemons = async () => {  //fetch() takes one argument — the path to the resource you want to fetch 
   
    for(let i =1; i<= pokemon_count; i++){  // promise
        await getPokemon(i)    //wait this function
    }
}
    const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)   // fetch() takes one argument   and does not directly return the JSON response body but instead returns a promise that resolves with a Response object.
    const data = await res.json()  //convert to json

    /*The Response object, in turn, does not directly contain the actual JSON response body but is
     instead a representation of the entire HTTP response. So, to extract the JSON body content from 
     the Response object, we use the json() method, which returns a second promise that resolves with
      the result of parsing the response body text as JSON.*/


    createPokemonCard(data)
}



const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
  
    //const name = pokemon.name.toUpperCase()

    const name = pokemon.name[0].toUpperCase()  + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')

     const poke_types = pokemon.types.map(type => type.type.name)
   // console.log(poke_types)
     const type = main_types.find(type => poke_types.indexOf(type) > -1)
     const color = colors[type]

   pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
            <div class="img-container">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
            </div>
            <div class="info">
                <span class="number">${id}</span> 
                <h3 class="name">${name}</h3>
                <small class="type">Type: <span>${type}</span></small>
            </div>
    `

    pokemonEl.innerHTML = pokemonInnerHTML
    poke_container.appendChild(pokemonEl)
}



fetchPokemons();