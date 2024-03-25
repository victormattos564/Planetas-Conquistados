export default class Planet {
  constructor(
    id,
    name,
    dateOfConquist,
    color1,
    color2,
    population,
    naturalResources,
    numberHumanSettlements,
    location,
    communication,
    planetRuler
  ) {
    this.id = id;
    this.name = name;
    this.dateOfConquist = dateOfConquist;
    this.color1 = color1;
    this.color2 = color2;
    this.population = population;
    this.naturalResources = naturalResources;
    this.numberHumanSettlements = numberHumanSettlements;
    this.location = location;
    this.communication = communication;
    this.planetRuler = planetRuler;
  }
}