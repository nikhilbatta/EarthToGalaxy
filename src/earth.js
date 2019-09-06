export class Human1 {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }
  jupiterAge(){
    let ageForJupiter = Math.round(this.age / 11.86);
    let expectancyForJupiter = this.expectancy * 2;
    return ageForJupiter;
    return expectancyForJupiter;
  }
}
