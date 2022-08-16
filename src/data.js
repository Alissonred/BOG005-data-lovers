export const filterData = (data, condition) => {
  if (!data  || !condition )
   { throw new TypeError('No hay datos.');}
 const dataFiltrada= data.filter( character  => {
  return character.status === condition})
  return dataFiltrada
};

export const sortData = (data, sortOrder) => {
if (sortOrder === "A-Z") { 
  const sortedDataDownward = data.sort((a,b) => {
if (a.name < b.name) {
  return -1;
}
 else if (a.name > b.name ) {
  return 1;
} else
return 0;
  })
  return sortedDataDownward;
} 

else if (sortOrder === "Z-A") {
  const sortedDataUpward = data.sort((a,b) => {
    
    if (a.name > b.name) {
      return -1;
    }
     else if (a.name < b.name ) {
      return 1;
    } else
    return 0;
      })
      return sortedDataUpward;
    } 
}


