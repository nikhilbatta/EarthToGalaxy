export class Human1 {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  jupiterAge(){
    const expectancyForJupiter = 25;
    if (this.age <= 12){
      let ageForJupiter = "You're not even 1 years old on this planet"
      let expectancyForJupiter = 0;
      return {ageForJupiter, expectancyForJupiter}
    } else if(this.age > expectancyForJupiter){
      let ageForJupiter = Math.round(this.age / 11.86)
      let yearsOverExpectancy = expectancyForJupiter - ageForJupiter
      return {yearsOverExpectancy, ageForJupiter};
    } else{
      let ageForJupiter = Math.round(this.age/11.86);
      let yearsUnderExpectancy = expectancyForJupiter - ageForJupiter;
      return {yearsUnderExpectancy, ageForJupiter};
    }
  }
  venusAge(){
    const expectancyForVenus = 40;
    if (this.age <= 1){
      let ageForVenus = "You're not even 1 years old on this planet"
      let expectancyForVenus = 0;
      return {ageForVenus, expectancyForVenus};
    } else if (this.age > expectancyForVenus){
    let yearsOverExpectancy = this.age - expectancyForVenus;
    let ageForVenus = Math.round(this.age / .62);
    return {yearsOverExpectancy,ageForVenus};
  } else{
    let ageForVenus = Math.round(this.age / .62);
    let yearsUnderExpectancy = expectancyForVenus - ageForVenus;
    return {ageForVenus, yearsUnderExpectancy};
  }
  }
  marsAge(){
    if(this.age < 2){
      let ageForMars =  "You're not even 1 years old on this planet";
      let expectancyForMars = 0;
      return {ageForMars,expectancyForMars}
    } else {
    let ageForMars = Math.round(this.age / 1.88);
    let expectancyForMars = this.expectancy/2
    return {ageForMars,expectancyForMars};
  }
}
  mercuryAge(){
    let ageForMercury = Math.round(this.age / .24);
    let expectancyForMercury = this.expectancy * .2
    return ageForMercury;
    return expectancyForMercury;
  }
}

var person = new Human1(4,80)
person.marsAge()
