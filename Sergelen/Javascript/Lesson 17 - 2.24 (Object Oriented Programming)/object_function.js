const player = {
  name: "Sergelen",
  age: 35,
  isTurn: true,
  play: function () {
    if (player.isTurn) {
      console.log(`${player.name} is playing now`);
    }
  },
};

player["play"]();
