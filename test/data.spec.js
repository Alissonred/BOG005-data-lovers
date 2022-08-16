import { filterData } from '../src/data.js';
import { sortData } from '../src/data.js';


// testear:
// es una funcion
//reciba array           // error en caso de que no
//reciba 2 parametros   // error en caso de que no
//test ejemplo(moc)         // error en caso de que no


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let original_data = {
   info: {
    count: "informacion"
    }, 
    results: [
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)",
      },
      image: "images/1.jpeg"
    },

    {
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)",
      },
      image: "images/2.jpeg"
    },
    {
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown"
      },
      location: {
        name: "Citadel of Ricks",
      },
      image: "images/8.jpeg"
    },
  ]
 
};

//////////////////////////////////////////////FILTER///////////////////////////////////////////////////////////////////////////////
describe('filterData', () => {
  it('to evaluate if filterData is a function', () => {  //// testea que sea una funcion
    expect(typeof filterData).toBe('function');
  });

  it('Returns filterData alive', () => {                     // testea filtrar alive
    let dataExpect = [
  
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
          name: "Earth (C-137)"
        },
        location: {
          name: "Earth (Replacement Dimension)",
        },
        image: "images/1.jpeg"
      },
      {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
          name: "Earth (C-137)"
        },
        location: {
          name: "Earth (Replacement Dimension)",
        },
        image: "images/2.jpeg"
      },
    ];
    expect(filterData(original_data.results, "Alive")).toEqual(dataExpect);
  });

  it('filterData returns a TypeError', () => {                      // testea el error 
    expect(() =>filterData()).toThrow(TypeError);
    expect(() =>filterData(null, null)).toThrow(TypeError);
    expect(() =>filterData([], null)).toThrow(TypeError);
   }); 

  it('Returns filterData dead', () => {                     // testea filtrar dead
  let dataExpectDead = [

 {
  name: "Adjudicator Rick",
  status: "Dead",
  species: "Human",
  gender: "Male",
  origin: {
    name: "unknown"
  },
  location: {
    name: "Citadel of Ricks",
  },
  image: "images/8.jpeg"   
    },
  ];
  expect(filterData(original_data.results, "Dead")).toEqual(dataExpectDead);
   

/*  it('filterData returns a TypeError', () => {                      // testea el error 
  expect(() => filterData( )).toThrow(TypeError);
});  */
  });

  it('Returns filterData unknown', () => {                     // testea filtrar alive
    let dataExpectUnknown = [
    ];
    expect(filterData(original_data.results, "unknown")).toEqual(dataExpectUnknown);
     

   /* it('filterData returns a TypeError', () => {                      // testea el error 
    expect(() => filterData( )).toThrow(TypeError);
  });  */
  });

  });

///////////////////////////////////////////////SORT//////////////////////////////////////////////////////////////////////////////////
describe('sortData', () => {
  it('to evaluate if sortData is a function', () => {  //// testea que sea una funcion
    expect(typeof sortData).toBe('function');
  });

  it('Returns sortData A-Z', () => {                     // testea filtrar alive
    let dataExpectAZ = [
      {
        name: "Adjudicator Rick",
        status: "Dead",
        species: "Human",
        gender: "Male",
        origin: {
          name: "unknown"
        },
        location: {
          name: "Citadel of Ricks",
        },
        image: "images/8.jpeg"
      },
      {
        name: "Morty Smith",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
          name: "Earth (C-137)"
        },
        location: {
          name: "Earth (Replacement Dimension)",
        },
        image: "images/2.jpeg"
      },
      {
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        gender: "Male",
        origin: {
          name: "Earth (C-137)"
        },
        location: {
          name: "Earth (Replacement Dimension)",
        },
        image: "images/1.jpeg"
      },
      
    ];
    expect(sortData(original_data.results, "A-Z")).toEqual(dataExpectAZ);
     

   /* it('filterData returns a TypeError', () => {                      // testea el error 
    expect(() => filterData( )).toThrow(TypeError);
  });  */
  });

  it('Returns sortData Z-A', () => {                     // testea filtrar dead
  let dataExpectZA = [
    {
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)",
      },
      image: "images/1.jpeg"
    },
    {
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)"
      },
      location: {
        name: "Earth (Replacement Dimension)",
      },
      image: "images/2.jpeg"
    },
    {
      name: "Adjudicator Rick",
      status: "Dead",
      species: "Human",
      gender: "Male",
      origin: {
        name: "unknown"
      },
      location: {
        name: "Citadel of Ricks",
      },
      image: "images/8.jpeg"
    },
  ];
  expect(sortData(original_data.results, "Z-A")).toEqual(dataExpectZA);
   

/*  it('filterData returns a TypeError', () => {                      // testea el error 
  expect(() => filterData( )).toThrow(TypeError);
});  */
  });

  it('sortData returns a TypeError', () => {                      // testea el error 
    expect(() =>sortData()).toThrow(TypeError);
    expect(() =>sortData(null,null)).toThrow(TypeError);
    expect(() =>sortData([],null)).toThrow(TypeError);
   }); 
});









describe('example', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

   it('should return the selected filter', () => {
    expect(filterData()).toBe('Array');
  });
});

/*
describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
