export default class UsersRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  get(id) {
    return this.users.find((user) => user.id === id);
  }

  add(user) {
    this.users.push(user);
  }

  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }

  update(id, planet, population, location, communication, conquista, primaryColor, secondaryColor) {
    const user = this.get(id);

    if (user) {
      user.planet = planet;
      user.conquista = conquista;
      user.primaryColor = primaryColor;
      user.secondaryColor = secondaryColor;
      user.population = population;
      user.location = location;
      user.communication = communication;
    }
    return user;
  }
}
