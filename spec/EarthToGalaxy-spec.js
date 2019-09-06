import { Human } from './../src/main.js';

describe("human.jupiterAge()",function(){
  it("will grab the age and expectancy for planet jupiter", function(){
    let person = new Human(8,80)
    if(this.age < 12){
      expect(person.jupiterAge()).toEqual("You're not even 1 year old on this planet!",160)
    }
  })
})
