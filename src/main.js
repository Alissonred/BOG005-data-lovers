import { filterData, sortData, computeStatus } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

const charactersSerie = document.getElementById("characters"); // section

function showData(data) {
  gamecontainer.innerHTML = "";
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
        <section id="parrafosmodal">
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
     </section>
      `;
  }

  charactersSerie.innerHTML = showCharacters;

}

showData(data.results)

const buttonFilter = document.getElementById("filterButton");
buttonFilter.addEventListener("change", () => showData(filterData(data.results, buttonFilter.value)));

const buttonSort = document.getElementById("sortButton");
buttonSort.addEventListener("change", () => ShowAll(data.results, filterData(data.results, buttonFilter.value)));

function ShowAll (data, datafiltered) {
  let sortAll="";
    if (buttonFilter.value === "Filter") {
      sortAll+= showData(sortData(data, buttonSort.value));  
    } else {
      sortAll+= showData(sortData(datafiltered, buttonSort.value));
    }
  return sortAll
  }
    
const buttonAll = document.getElementById("buttonAll");
buttonAll.addEventListener("click", () => showData(data.results));

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

  const gamecontainer = document.getElementById("gamecontainer") //section 2

  charactersSerie.innerHTML = "";
  gamecontainer.innerHTML = `<h4 id="TitleGame">Which character does the image refer to?</h4>
  <article id=secondcontainergame> <figure class="figure">
  <img id="imageGame" src=${answer1.image} alt="Imagen">
  <section id="clue">
<h5>This character has a ${computeStatus(answer1)}% of appearance in the series.</h5>
  </section>
  </figure>
  <select  name="select an answer" id="opc_img">
  <option disabled selected ="Select an answer"></option>
  <option id="answer1" value="${opciones[0].name}">${opciones[0].name}</option>
  <option id="answer2" value="${opciones[1].name}">${opciones[1].name}</option>
  <option id="answer2" value="${opciones[2].name}">${opciones[2].name}</option> </select>
  <button  id="ButtonNext">Next</button>
  </article>
  
  
  `;

  gamecontainer.querySelector("#ButtonNext").addEventListener("click", () => showGame(data.results))

  gamecontainer.querySelector("#opc_img").addEventListener("change", (event) => {
    if (event.target.value === answer1.name) { score++; }
  })



  let category = "";
  if (countQuestions === 11) {
    gamecontainer.innerHTML = "";
    if (score <= 3) { category += "Not a fan!" }
    else if (score >= 4 && score <= 6) { category += "You are almost a fan!" }
    else if (score >= 7 && score <= 10) { category += "You are a big fan!" }
    gamecontainer.innerHTML = `
    <article id= "results"> <h6> You  finished. <br>
    Your score is: ${score} <br>
    Your category is: ${category} </h6>
    </article>
    `;
  }


}
