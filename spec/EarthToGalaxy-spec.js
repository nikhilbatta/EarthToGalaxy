import { Human } from './../src/main.js';
describe("human.jupiterAge()",function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    let person = new Human(8,80)
    expect(person.jupiterAge().toEqual(33,160))
  })
})
