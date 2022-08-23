import { filterData } from '../src/data.js';
import { sortData } from '../src/data.js';
import { computeStatus } from '../src/data.js';

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
   
  });

  it('Returns filterData unknown', () => {                     // testea filtrar alive
    let dataExpectUnknown = [
    ];
    expect(filterData(original_data.results, "unknown")).toEqual(dataExpectUnknown);
     
    
  });

  });

///////////////////////////////////////////////SORT//////////////////////////////////////////////////////////////////////////////////
describe('sortData', () => {
  it('to evaluate if sortData is a function', () => {  
    expect(typeof sortData).toBe('function');
  });

  it('Returns sortData A-Z', () => {                     
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
     
  });

  it('Returns sortData Z-A', () => {                   
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

  });

  it('sortData returns a TypeError', () => {                      // testea el error 
    expect(() =>sortData()).toThrow(TypeError);
    expect(() =>sortData(null,null)).toThrow(TypeError);
    expect(() =>sortData([],null)).toThrow(TypeError);
   }); 
});

let original_dataCompute = {
  info: {
   count: "informacion"
   }, 
   results: [
   {
     name: "Rick Sanchez",
     status: "Alive",
     episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
   },

   {
     name: "Morty Smith",
     status: "Alive",
     episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31"
  ],
   
   },
   {
     name: "Adjudicator Rick",
     status: "Dead",
     episode: [
      "https://rickandmortyapi.com/api/episode/28"
    ],
   },
 ]

};

describe('computeStatus', () => {
  it('to evaluate if computeStatus is a function', () => {  
    expect(typeof computeStatus).toBe('function');
  });

  it('Returns percentage of characters', () => { 
let computexpected = (original_dataCompute.episode / 31) * 100
    expect(computeStatus(original_dataCompute.results)).toBe(computexpected);
  });
});









