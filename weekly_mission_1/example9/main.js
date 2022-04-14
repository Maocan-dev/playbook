const Pokemon = require("./pokemon");

const pikachu = new Pokemon("pikachu");
const bulbasaur = new Pokemon("bulbasaur");
const squirtle = new Pokemon("squirtle");
const charmander = new Pokemon("charmander");
/* 
pikachu.sayHello();
pikachu.sayMessage("Heey!");

bulbasaur.sayHello();
bulbasaur.sayMessage("Heey!");

charmander.sayHello();
charmander.sayMessage("Heey!");

squirtle.sayHello();
squirtle.sayMessage("Heey!");

 */
pikachu.sayHello();
bulbasaur.sayHello();
charmander.sayHello();
squirtle.sayHello();

pikachu.jump(2);
pikachu.jump(12);
pikachu.showJumps();
bulbasaur.showJumps();
