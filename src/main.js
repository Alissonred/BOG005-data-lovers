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
      <h2 class="labels_m">${characters.name}</h2>
      <a href="#${characters.id}" class="ButtonModal">Read more</a>
      </article>
      <section id="${characters.id}"class="modalDialog">
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
  charactersSerie.innerHTML= showCharacters;
}

showData(data.results)

const buttonFilter = document.getElementById("filterButton");
buttonFilter.addEventListener("change", () => showData(filterData(data.results, buttonFilter.value)));

const buttonSort = document.getElementById("sortButton");
buttonSort.addEventListener("change", () => showData(sortData(data.results, buttonSort.value)));

const buttonAll = document.getElementById("buttonAll");
buttonAll.addEventListener("click", () => showData(data.results));

/////////////////////////// calcular///////
let score=0; // puntaje
const buttonGame = document.getElementById("buttonGame");// creo boton
buttonGame.addEventListener("click",()=> showGame(data.results));

function showGame (data) {
 
  let objetivo1 = data[Math.floor(Math.random()*(1+493)+ 0)] // selecc objeto aleatorio revisar bien los parametros de la funcion aleatoria
  let objetivo2 = data[Math.floor(Math.random()*(1+493)+ 0)] // selecc objeto aleatorio revisar bien los parametros de la funcion aleatoria
  let objetivo3 = data[Math.floor(Math.random()*(1+493)+ 0)] // selecc objeto aleatorio revisar bien los parametros de la funcion aleatoria
  let objetivos = [objetivo1, objetivo2, objetivo3];
  console.log(objetivo1);
  charactersSerie.innerHTML = ""; //limpia contenedor
  charactersSerie.innerHTML = `
  <a href="#${objetivo1.id}" class="ButtonModal">Next</a>

  <article id="${objetivo1.id}">
  <p class ="texto">¿A que personaje hace referencia la imagen</p>
  <img src=${objetivo1.image} alt="Imagen">
  <br>
  <select name="Selecciona una opción" id="opc_img">
  <option disabled selected ="">Selecciona una opción</option>
  <option id="rta11" value="${objetivo1.name}">${objetivo1.name}</option>
  <option id="rta12" value="${objetivo2.name}">${objetivo2.name}</option>
  <option id="rta13" value="${objetivo3.name}">${objetivo3.name}</option>
  </select>
  
  </article>
 
  `;
}
 
