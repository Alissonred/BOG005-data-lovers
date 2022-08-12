import { filterData } from '../src/data.js';


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
     

   /* it('filterData returns a TypeError', () => {                      // testea el error 
    expect(() => filterData( )).toThrow(TypeError);
  });  */
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
});

/* 
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
 */