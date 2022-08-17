import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const charactersSerie = document.getElementById("characters");
 function showData(data) {
  let showCharacters ="";
  charactersSerie.innerHTML = "";
  for (let characters of data) {
    showCharacters += `<article class="pictures"> 
      <img src=${characters.image} alt="Imagen">
      <br>
      <h2>${characters.name}</h2>
      <br>
      <a href="#${characters.id}" class="ButtonModal">Read more</a>
      </article>
      <section id="${characters.id}"class="modalDialog">
      <section>
        <a href="#close" title="Close" class="close">X</a>
        <h3>${characters.name}</h3>
        <img src=${characters.image} alt="Imagen">
        <p>Estatus: ${characters.status}</p>
        <p>Especie: ${characters.species}</p>
        <p>Género: ${characters.gender}</p>
        <p>Origen: ${characters.origin.name}</p>
        <p>Locación: ${characters.location.name}</p>
        <p>Número de episodios: ${characters.episode.length}</p>
      </section>
     </section>
      `;
  }
  charactersSerie.innerHTML= showCharacters;
}

showData(data.results)

const buttonFilter = document.getElementById("filterButton");
buttonFilter.addEventListener("change", () => showData(filterData(data.results, buttonFilter.value)));

const buttonSort = document.getElementById("sortButton");
buttonSort.addEventListener("change", () => showData(sortData(data.results, buttonSort.value)));

const buttonAll = document.getElementById("buttonAll");
buttonAll.addEventListener("click", () => showData(data.results));



