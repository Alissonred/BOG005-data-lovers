import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
var characteresSerie = document.getElementById("personajes");

for(let personajes of data.results) {
    console.log(personajes);
    characteresSerie.innerHTML += `<article> 
    <h2>${personajes.name}</h2>
    <br>
    <img src=${personajes.image} alt="muestra" >
    <p>${personajes.status}</p>
    <br>
    <p2>${personajes.species}</p2>
    <br>
    <p3>${personajes.type}</p3>
    <br>
    <p4>${personajes.gender}</p4>
    </article>`;
}


