class pokemon {
  constructor(name) {
    this.count = 0;
    this.name = name;
  }
  sayHello() {
    this.count++;
    console.log(`Hi, I'm ${this.name}`);
  }
  jump(times) {
    for (let i = 0; i < times; i++) {
      this.count++;
    }
    console.log(`${this.name} is jumping`);
  }
  showJumps() {
    console.log(`${this.name} has jumped ${this.count} times`);
  }
}
/* module.exports = new pokemon("pikachu");
module.exports.pokemon = pokemon; */

//export class pokemon
module.exports = pokemon;
