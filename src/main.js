import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const charactersSerie = document.getElementById("characters");
function showData(data) {
  let showCharacters = "";
  charactersSerie.innerHTML = "";
  for (let characters of data) {
    showCharacters += `<article class="pictures"> 
      <img src=${characters.image} alt="Imagen">
      <h2 class="labels_m">${characters.name}</h2>
      <a href="#${characters.id}" class="ButtonModal">Read more</a>
      </article>
      <section id="${characters.id}" class="modalDialog">
      <section>
        <a href="#close" title="Close" class="close">X</a>
        <h3>${characters.name}</h3>
        <img src=${characters.image} alt="Image" id="imagemodal">
        <p class="labels_m">Estatus: ${characters.status}</p>
        <p class="labels_m">Especie: ${characters.species}</p>
        <p class="labels_m">Género: ${characters.gender}</p>
        <p class="labels_m">Origen: ${characters.origin.name}</p>
        <p class="labels_m">Locación: ${characters.location.name}</p>
        <p class="labels_m">Número de episodios: ${characters.episode.length}</p>
      </section>
     </section>
      `;
  }
  charactersSerie.innerHTML = showCharacters;
}

showData(data.results)

const buttonFilter = document.getElementById("filterButton");
buttonFilter.addEventListener("change", () => showData(filterData(data.results, buttonFilter.value)));

const buttonSort = document.getElementById("sortButton");
buttonSort.addEventListener("change", () => showData(sortData(data.results, buttonSort.value)));

const buttonAll = document.getElementById("buttonAll");
buttonAll.addEventListener("click", () => showData(data.results));

/////////////////////////// calcular///////
let score = 0;
let countQuestions = 0;
const buttonGame = document.getElementById("buttonGame");
buttonGame.addEventListener("click", () => showGame(data.results));



function showGame(characters) {
  countQuestions++;
  let answer1 = characters[Math.floor(Math.random() * (1 + 493) + 0)]
  let answer2 = characters[Math.floor(Math.random() * (1 + 493) + 0)]
  let answer3 = characters[Math.floor(Math.random() * (1 + 493) + 0)]
  let opciones = [answer1, answer2, answer3];
  opciones.sort(() => Math.random() - 0.5)

  charactersSerie.innerHTML = "";
  charactersSerie.innerHTML = `
  <article id=Gamecontainer> <h4>Which caracter?</h4>
  <br>
  <img src=${answer1.image} alt="Imagen">
  <select name="select an answer" id="opc_img">
  <option disabled selected ="Select an answer"></option>
  <option id="answer1" value="${opciones[0].name}">${opciones[0].name}</option>
  <option id="answer2" value="${opciones[1].name}">${opciones[1].name}</option>
  <option id="answer2" value="${opciones[2].name}">${opciones[2].name}</option> </select>
  <button id="ButtonNext">Next</button>
  </article>
  `;

  charactersSerie.querySelector("#ButtonNext").addEventListener("click", () => showGame(data.results))

  charactersSerie.querySelector("#opc_img").addEventListener("change", (event) => {
    if (event.target.value === answer1.name) { score++; }
  })

  if (countQuestions === 6) {
    alert("terminaste" + "tu puntaje es" + score)
  
  }

}
