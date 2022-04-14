class pokemon {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }
  sayHello() {
    this.count++;
    console.log(`Mi pokemon ${this.name} te saluda!!!`);
  }
  sayMessage(message) {
    this.count++;
    console.log(`Mi pokemon ${this.name} dice: ${message}`);
  }
}

module.exports = pokemon;
