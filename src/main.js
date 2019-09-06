export class Human {
  constructor(age,expectancy){
    this.age = age;
    this.expectancy = expectancy;
  }
  jupiterAge(){
    if(this.age < 12){
      let ageForJupiter = ("You're not even 1 year old on this planet!");
      return ageForJupiter;
    }
    else{
    let ageForJupiter = Math.round(this.age / 11.86)
    let expectancyForJupiter = this.expectancy * 2
    return ageForJupiter;
    return expectancyForJupiter
  }
  }
}
