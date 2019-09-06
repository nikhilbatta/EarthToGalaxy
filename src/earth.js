export class Human1 {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  jupiterAge(){
    if (this.age < 12){
      let ageForJupiter = "You're not even 1 years old on this planet"
      let expectancyForJupiter = 0;
      return ageForJupiter;
      return expectancyForJupiter;
    } else {
      let ageForJupiter = Math.round(this.age / 11.86);
      let expectancyForJupiter = 74;
      if(this.age > expectancyForJupiter){
        expectancyForJupiter = this.age - expectancyForJupiter
        return ageForJupiter;
        return expectancyForJupiter;
      }
    }
  }
  venusAge(){
    let ageForVenus = Math.round(this.age / .62);
    let expectancyForVenus = this.expectancy * 5
    return ageForVenus;
    return expectancyForVenus;
  }
  marsAge(){
    let ageForMars = Math.round(this.age / 1.88);
    let expectancyForMars = this.expectancy * .1
    return ageForMars;
    return expectancyForMars;
  }
  mercuryAge(){
    let ageForMercury = Math.round(this.age / .24);
    let expectancyForMercury = this.expectancy * .2
    return ageForMercury;
    return expectancyForMercury;
  }
}
var person = new Human1(8,80)
person.jupiterAge()
