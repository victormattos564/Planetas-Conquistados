export default class PlanetsRepository {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(
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
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.dateOfConquist = dateOfConquist;
      planet.color1 = color1;
      planet.color2 = color2;
      planet.population = population;
      planet.naturalResources = naturalResources;
      planet.numberHumanSettlements = numberHumanSettlements;
      planet.location = location;
      planet.communication = communication;
      planet.planetRuler = planetRuler;
    }
    return planet;
  }
}