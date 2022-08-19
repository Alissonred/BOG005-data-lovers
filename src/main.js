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

/////////////////////////// calcular/////////////////////////////////////
let score = 0;
let countQuestions = 0;
const buttonGame = document.getElementById("buttonGame");
buttonGame.addEventListener("click", () => showGame(data.results));

let labelask_pre = ["name", "origin name", "species", "status", "location name"]; // pregunda directa escrita para user
let preguntas_pre = ["name", "origin.name", "species", "status", "location.name"]; // pregunda directa para evaluar

function showGame(characters) {
  countQuestions++; ///contador de preguntas
  let item_aleat = Math.floor(Math.random() * (1 + 4) + 0); //// indice aleatorio para propiedades a preguntar
  let item_aleat1 = Math.floor(Math.random() * (1 + 1) + 0); //// indice aleatorio para selec personaje a preguntar
  let labelask = labelask_pre[item_aleat]; /// pregunta aleatoria
  let answerRandom = [characters[Math.floor(Math.random() * (1 + 493) + 0)], characters[Math.floor(Math.random() * (1 + 493) + 0)]];//opciones
  let answerOk = answerRandom[item_aleat1];//selecc una de las 2 opc como correcta
  console.log(labelask + " es lo que pregunta");// que está preguntando
  console.log(answerOk.name + " es a quien pregunta");// a quien pregunta
  console.log(answerOk[preguntas_pre[item_aleat]] + " es la respuesta");// cual es la rta

  charactersSerie.innerHTML = "";
  charactersSerie.innerHTML = `
  <article id=Gamecontainer> <h4> The ${labelask} to character showed is ${answerRandom[preguntas_pre[item_aleat]]} ?</h4>
  <img src=${answerOk.image} alt="${answerOk.name}">
    <br>
  <select name="select an answer" id="opc_img">
  <option disabled selected ="Select an answer"></option>
  <option id="answer1" value="true"> True</option>
  <option id="answer2" value="false"> False</option>
  </select>
  <p id="puntaje" >Puntaje acumulado: ${score}</p>

  <button id="ButtonNext">Next</button>
  </article>
  `;

  charactersSerie.querySelector("#ButtonNext").addEventListener("click", () => showGame(data.results))
  charactersSerie.querySelector("#opc_img").addEventListener("change", (event) => {
    if (event.target.value === "true") {
      if (answerRandom[preguntas_pre[item_aleat]] === answerOk[preguntas_pre[item_aleat]]) { /// evalua que selecciono true y era v
        score++;
        alert("excelente" + " puntaje acumulado " + score);
        console.log(score);
      }
      else { alert("fallaste :("); }
    }
    else if (event.target.value === "false") {
      if (answerRandom[preguntas_pre[item_aleat]] !== answerOk[preguntas_pre[item_aleat]]) { // evalua que selec false y era
        score++;
        alert("excelente" + "puntaje acumulado" + score);
        console.log(score);
      }
      else { alert("fallaste"); }
    }
  })
  console.log("puntaje: " + score);

  if (countQuestions === 6) {
    alert("terminaste, tu puntaje es" + score)
    let category = "";
    if (score < 2) { category = " principiante" }
    else if (score >= 2 && score <= 3) { category = " intermedio" }
    else if (score >= 3 && score <= 5) { category = " avanzado" }
    charactersSerie.innerHTML = "";
    charactersSerie.innerHTML = `
  <article id= "results"> you  finished, your score is: ${score}, your category is ${category}
  </article>
  `;
  }/// Resultados de juego

}

