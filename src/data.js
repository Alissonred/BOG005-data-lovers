export const filterData = (data, condition) => {
  /* if (data === undefined && condition === undefined)
   { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error */
  const dataFiltrada= data.filter( character  => {
   return character.status === condition})
   return dataFiltrada
 }
 
export const sortData = (data, criterial) => {
  let dataOrdenada = [];
  //console.log(criterial);
  if (criterial === "A-Z"){
    dataOrdenada = data.sort((a, b)  => {
    if(a.name < b.name) //se ordena de a a-z
    {return -1;}
    else if (a.name>b.name) // seordena de z-a
    {return 1;}
    else if (a.name ==b.name) // seordena de z-a
    {return 0;}
    });
    }

  else if (criterial === "Z-A"){
  //alert("ordena z-a");
  dataOrdenada =data.sort((a ,b)  => {
    if(a.name > b.name) //se ordena de a a-z
    {return -1;}
    else if (a.name < b.name) // seordena de z-a
    {return 1;}
    else if (a.name == b.name) // seordena de z-a
    {return 0;}
    });
 }
//console.log(dataOrdenada);
return dataOrdenada;

 }
 
//// funcion ordenar auxiliar
/* function sortDats(dato, criterio){
console.log(criterio);
let orden=[];
if (criterio === "a-z"){
  alert("ordena a-z");
 orden = dato.sort((a ,b)  => {
  if(a < b) //se ordena de a a-z
  {return -1;}
  else if (a>b) // seordena de z-a
  {return 1;}
  else if (a==b) // seordena de z-a
  {return 0;}
  
  });
  }
else if (criterio === "z-a"){
  alert("ordena z-a");
  orden =dato.sort((a ,b)  => {
    if(a > b) //se ordena de a a-z
    {return -1;}
    else if (a<b) // seordena de z-a
    {return 1;}
    else if (a==b) // seordena de z-a
    {return 0;}
    });
 }
return orden;
}

console.log(sortDats(["ana", "beto", "zahira","kas", "casa" ],"z-a"));
 */