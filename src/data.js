// estas funciones son de ejemplo

export const filterData = (data, condition) => {
 const dataFiltrada= data.filter( character  => {
 return character.status === condition
}) 
console.log(dataFiltrada) 
  
}




/*export const anotherExample = () => {
  return 'OMG';
}; */
