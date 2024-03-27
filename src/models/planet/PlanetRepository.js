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
    dataDeConquista,
    color1,
    color2,
    populacao,
    recursosNaturais,
    numeroDeAssentamentosHumanos,
    localizacao,
    comunicacao,
    governanteDoPlaneta
  ) {
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.dataDeConquista = dataDeConquista;
      planet.color1 = color1;
      planet.color2 = color2;
      planet.populacao = populacao;
      planet.recursosNaturais = recursosNaturais;
      planet.numeroDeAssentamentosHumanos = numeroDeAssentamentosHumanos;
      planet.localizacao = localizacao;
      planet.comunicacao = comunicacao;
      planet.governanteDoPlaneta = governanteDoPlaneta;
    }
    return planet;
  }
}