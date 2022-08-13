import { filterData } from './data.js';
import { sortData } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const charactersSerie = document.getElementById("characters");
function showData(data) {
  let showCharacters ="";
  charactersSerie.innerHTML = "";
  for (let characters of data) {
    showCharacters += `<article> 
      <img src=${characters.image} alt="Imagen">
      <br>
      <h2>${characters.name}</h2>
      <a href="#${characters.id}">Ver más</a>
      </article>
      <section id="${characters.id}"class="modalDialog">
      <section>
        <a href="#close" title="Close" class="close">x</a>
        <h3>${characters.name}</h3>
        <img src=${characters.image} alt="Imagen">
        <p>Estatus: ${characters.status}</p>
        <p>Especie: ${characters.species}</p>
        <p>Género: ${characters.gender}</p>
        <p>Origen: ${characters.origin.name}</p>
        <p>Locación: ${characters.location.name}</p>
        <p>Número de episodios en los que aparece: ${characters.episode.length}</p>
      </section>
     </section>
      `;
  }
  charactersSerie.innerHTML= showCharacters;
}

showData(data.results);

const buttonFilter = document.getElementById("filterButton");
const buttonSort = document.getElementById("sortButton");
buttonFilter.addEventListener("change", () => showData(filterData(data.results, buttonFilter.value)));
buttonSort.addEventListener("change", () => showData(sortData(data.results, buttonSort.value)));




