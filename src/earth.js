export class Human1 {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  jupiterAge(){
    const expectancyForJupiter = 65;
    if (this.age < 12){
      let ageForJupiter = "You're not even 1 years old on this planet"
      let expectancyForJupiter = 0;
      return {ageForJupiter, expectancyForJupiter}
    } else if(this.age > expectancyForJupiter){
      let yearsOverExpectancy = this.age - expectancyForJupiter
      let ageForJupiter = Math.round(this.age / 11.86)
      return {yearsOverExpectancy, ageForJupiter};
    }
  }
  venusAge(){
    const expectancyForVenus = 40;
    if (this.age < 1){
      let ageForVenus = "You're not even 1 years old on this planet"
      let expectancyForVenus = 0;
      return {ageForVenus, expectancyForVenus};
    } else if (this.age > expectancyForVenus){
    let yearsOverExpectancy = this.age - expectancyForVenus;
    let ageForVenus = Math.round(this.age / .62);
    return {yearsOverExpectancy,ageForVenus};
  }
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
var person = new Human1(66,80)
person.jupiterAge()
