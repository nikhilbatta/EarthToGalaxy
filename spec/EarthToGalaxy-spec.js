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
  it("will give us the correct age and yearsUnderExpectancy for venus", function(){
    let person = new Human1(8,80);
    expect(person.venusAge()).toEqual(({ ageForVenus: 13, yearsUnderExpectancy: 27 }));
  });
});
describe("Human1", function(){
  it("will give us correct age and years over for venus", function(){
    let person = new Human1(51,80);
    expect(person.venusAge()).toEqual(({yearOverExpectancy: 11, ageForVenus: 82 }));
  });
});
describe("Human1", function(){
  it("will give us the correct age and yearsUnderExpectancy for mars ", function(){
    let person = new Human1(4,80);
    expect(person.marsAge()).toEqual(({ ageForMars: 2, expectancyForMars: 40 }));
  });
});
describe("Human1", function(){
  it("will give us the message saying you are not even 1 year old on this planet", function(){
    let person = new Human1(1,30);
    expect(person.marsAge()).toEqual(({ ageForMars: "You're not even 1 years old on this planet" , expectancyForMars: 0 }));
  });
});
describe("Human1", function(){
  it("for mercury and age", function(){
    let person = new Human1(4,80);
    expect(person.mercuryAge()).toEqual(({ ageForMercury: 17, yearsUnderExpectancy: -7 }));
  });
});
describe("Human1", function(){
  it("for mercury and age", function(){
    let person = new Human1(3,80);
    expect(person.mercuryAge()).toEqual(({ ageForMercury: 13, yearsUnderExpectancy: -3 }));
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
