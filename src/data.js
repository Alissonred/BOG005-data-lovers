export const filterData = (data, condition) => {
  /* if (data === undefined && condition === undefined)
   { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error */
   if (!data || !condition )
   { throw new TypeError('no hay datos');}
  const dataFiltrada= data.filter( character  => {
   return character.status === condition})
   return dataFiltrada
 }
 





//let datos = [a, b, c, d, s, l, a];
//let criterio= 

/* export const sortData = (datos, criterio) => {
  let dataordenada = [];
  if (criterio == "a-z"){
  //if (!datos || !criterio) { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error
   dataordenada =datos.sort((a ,b)  => {
    if(a < b) //se ordena de a a-z
    {return -1;}
    else if (a>b) // seordena de z-a
    {return 1;}
    else if (a==b) // seordena de z-a
    {return 0;}
    });
  }
  else if (criterio == "z-a"){
    //if (!datos || !criterio) { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error
    dataordenada =datos.sort((a ,b)  => {
      if(a < b) //se ordena de a a-z
      {return -1;}
      else if (a>b) // seordena de z-a
      {return 1;}
      else if (a==b) // seordena de z-a
      {return 0;}
      });
    }

  return dataordenada
 
}; */

/* 
function sortData (datos, criterio) {
  let dataordenada = [];
  if (criterio == "a-z"){
  //if (!datos || !criterio) { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error
   dataordenada =datos.sort((a ,b)  => {
    if(a < b) //se ordena de a a-z
    {return -1;}
    else if (a>b) // seordena de z-a
    {return 1;}
    else if (a==b) // seordena de z-a
    {return 0;}
    });
  }
  else if (criterio == "z-a"){
    //if (!datos || !criterio) { throw new TypeError('no hay datos');}  // lanza una nueva instancia del objeto error
    dataordenada =datos.sort((a ,b)  => {
      if(a < b) //se ordena de a a-z
      {return -1;}
      else if (a>b) // seordena de z-a
      {return 1;}
      else if (a==b) // seordena de z-a
      {return 0;}
      });
    }

  return dataordenada
 
}

let dat = [a,b,c,d,s,l,a];
sortData(dat,"z-a"); */