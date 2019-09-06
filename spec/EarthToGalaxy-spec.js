import { Human1 } from './../src/earth.js';
// beforeEach(function(){
//   const person = new Human1(8,80)
// })
describe("Human1", function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    let person = new Human1(66,80);
    expect(person.jupiterAge()).toEqual(({ newMessage: 1, ageForJupiter: 6 }));
  });
});
describe("Human1", function(){
  it("blah", function(){
    let person = new Human1(8,80);
    expect(person.venusAge()).toEqual( 5,60);
  });
});
describe("Human1", function(){
  it("blah2", function(){
    let person = new Human1(8,80);
    expect(person.marsAge()).toEqual(5,68);
  });
});
describe("Human1", function(){
  it("blah3", function(){
    let person = new Human1(8,80);
    expect(person.mercuryAge()).toEqual(1 ,160);
  });
});
// describe("Human1", function(){
//   it("will grab the age and expectancy for planet jupiter", function(){
//     let person = new Human1(8,80);
//     expect(person.jupiterAge()).toEqual(1 ,160);
//   });
// });
// describe("Human1", function(){
//   it("will grab the age and expectancy for planet jupiter", function(){
//     let person = new Human1(8,80);
//     expect(person.jupiterAge()).toEqual(1 ,160);
//   });
// });
