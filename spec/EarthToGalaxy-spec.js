import { Human1 } from './../src/earth.js';

beforeEach(function(){
  const person = new Human1(8,80)
})
describe("Human", function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    expect(person.jupiterAge()).toEqual(33,160);
  });
});
