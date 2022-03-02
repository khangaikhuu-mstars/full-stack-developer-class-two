const player = {
  name: "Ashley",
  color: "purple",
  isTurn: true,
  play: function () {
    if (player.isTurn === true) {
      console.log(player.name + " is playing now");
    }
  },
};
player.play();
// player["play"]();
// dot operator
player.isTurn = false;
//d operator
player["color"] = "brown";
console.log(player);
player.play();

// const player = {
//   name: "Ashley",
//   color: "purple",
//   isTurn: true,
//   play: function () {
//     if (player.isTurn === true) {
//       console.log(player.name + " is playing now");
//     }
//   },
// };

//redundancy- iluudel kod arilgah
//encapsulation
