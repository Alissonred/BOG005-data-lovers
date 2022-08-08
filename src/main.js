import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
//console.log(example, data);

const characteresSerie = document.getElementById("characteres");

for (let characteres of data.results) {
    characteresSerie.innerHTML += `<article> 
    <img src=${characteres.image} alt="Imagen">
    <br>
    <h2>${characteres.name}</h2>
    <a href="#${characteres.id}">Ver más</a>
    </article>

    <section id="${characteres.id}" class="modalDialog">
    <section>
      <a href="#close" title="Close" class="close">x</a>
      <h3>${characteres.name}</h3>
      <img src=${characteres.image} alt="Imagen">
      <p>Estatus: ${characteres.status}</p>
      <p>Especie: ${characteres.species}</p>
      <p>Género: ${characteres.gender}</p>
      <p>Origen: ${characteres.origin.name}</p>
      <p>Locación: ${characteres.location.name}</p>
      <p>Número de episodios en los que aparece: ${characteres.episode.length}</p>
    </section>
   </section>
    `;
}
