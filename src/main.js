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

let labelask_pre = ["name", "origin name", "species", "status", "location name"]; // pregunda directa escrita para user
let respuestas_pre = ["name", "image"]; // seleccion de referencia
let preguntas_pre = ["name", "origin.name", "species", "status", "location.name"]; // pregunda directa para evaluar

/* let propAsk =["name", "image"];
let propRta =["name", "origin.name", "species", "status", "location.name"];
let labelAsk = []; */
/* let propAsk ="";
let propRta ="";
if(){ propRta = "name"; propAsk = "image"; } // opciones de nombre
else if(){ propRta = "origin.name"; propAsk = "name"; } // opciones de origen
else if(){ propRta = "species"; propAsk = "name";} // opciones de especie
else if(){ propRta = "status"; propAsk = "image";} // opciones de estado
else if(){ propRta = "location.name"; propAsk = "image"; } // opciones de ubicacion */


function showGame(characters) {
  let item_aleat= Math.floor(Math.random() * (1 + 4) + 0);
  let listQuestions = [
    {
      labelask: labelask_pre[item_aleat], // pregunda directa escrita para user
      respuestas: ["name", "image"], // seleccion de referencia posibl un if
      preguntas: ["name", "origin.name", "species", "status", "location.name"], // pregunda directa para evaluar
    },
  
  ];
  countQuestions++;
  let answerRandom = [characters[Math.floor(Math.random() * (1 + 493) + 0)], characters[Math.floor(Math.random() * (1 + 493) + 0)], characters[Math.floor(Math.random() * (1 + 493) + 0)] ];
  let answerOk =  answerRandom[Math.floor(Math.random()*(1+2) + 0)];// elemento a evaluar
  console.log(answerRandom);
  console.log(answerOk);
  console.log(answerOk[1]);
  console.log (listQuestions[0].labelask);

  charactersSerie.innerHTML = "";
  charactersSerie.innerHTML = `
  <article id=Gamecontainer> <h4> what is the ${listQuestions[0].labelask} to character showed?</h4>
  <img src=${answerOk.image} alt="${answerOk.name}">
    <br>
  <select name="select an answer" id="opc_img">
  <option disabled selected ="Select an answer"></option>
  <option id="answer1" value="${answerRandom[2].name}"> ${answerRandom[2].name}</option>
  <option id="answer2" value="${answerRandom[1].name}">${answerRandom[1].name}</option>
  <option id="answer2" value="${answerRandom[0].name}">${answerRandom[0].name}</option> </select>
  <button id="ButtonNext">Next</button>
  </article>
  `;

  charactersSerie.querySelector("#ButtonNext").addEventListener("click", () => showGame(data.results))
  charactersSerie.querySelector("#opc_img").addEventListener("change", (event) => {if (event.target.value === answerOk.name) { score++; }})
  console.log(score);
  if (countQuestions === 6) {
    alert("terminaste" + "tu puntaje es" + score)
    charactersSerie.innerHTML = "";
    charactersSerie.innerHTML =  `
  <article id=results> you are finish, your score is: ${score}
  </article>
  `;
    
  }/// Resultados de juego
  
}
