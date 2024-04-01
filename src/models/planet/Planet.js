export default class Planet {
  constructor(
    namePlanet,
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
  this.id = this.genereteId();
    this.namePlanet = namePlanet;
    this.dataDeConquista = dataDeConquista;
    this.color1 = color1;
    this.color2 = color2;
    this.populacao = populacao;
    this.recursosNaturais = recursosNaturais;
    this.numeroDeAssentamentosHumanos = numeroDeAssentamentosHumanos;
    this.localizacao = localizacao;
    this.comunicacao = comunicacao;
    this.governanteDoPlaneta = governanteDoPlaneta;
  }
  genereteId() {
    return Math.floor(Math.random() * 1000);
  }
}