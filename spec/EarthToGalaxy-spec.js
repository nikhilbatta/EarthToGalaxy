import { Human1 } from './../src/earth.js';
// beforeEach(function(){
//   const person = new Human1(8,80)
// })
describe("Human1", function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    let person = new Human1(66,80);
    expect(person.jupiterAge()).toEqual(({ yearsOverExpectancy: 19, ageForJupiter: 6 }));
  });
});
describe("Human1", function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    let person = new Human1(12,30);
    expect(person.jupiterAge()).toEqual(({ ageForJupiter: "You're not even 1 years old on this planet", expectancyForJupiter: 0 }));
  });
});
describe("Human1", function(){
  it("blah", function(){
    let person = new Human1(8,80);
    expect(person.venusAge()).toEqual(({ ageForVenus: 13, yearsUnderExpectancy: 27 }));
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
