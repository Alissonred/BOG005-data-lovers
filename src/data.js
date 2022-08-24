export const filterData = (data, condition) => {
  if (!data  || !condition )
   { throw new TypeError('No hay datos.');}
 const dataFiltrada= data.filter( character  => {
  return character.status === condition})
  return dataFiltrada
};

export const sortData = (data, sortOrder) => {
  if (!data  || !sortOrder )
   { throw new TypeError('No hay datos.');}
   
if (sortOrder === "A-Z") { 
  const sortedDataDownward = data.sort((a,b) => {
if (a.name < b.name) {
  return -1;
} else
return 1;
  })
  return sortedDataDownward;
} 

else if (sortOrder === "Z-A") {
  const sortedDataUpward = data.sort((a,b) => {
    
    if (a.name > b.name) {
      return -1;
    } else
    return 1;
      })
      return sortedDataUpward;
    } 
}

export const computeStatus = (character) => {
  if (!Array.isArray(character.episode))
   { throw new TypeError('No hay datos.');}
  let compute = (character.episode.length / 31) * 100;
  return Math.round(compute)
}


