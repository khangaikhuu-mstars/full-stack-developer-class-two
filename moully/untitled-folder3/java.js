const player = {
  name: "Ashley",
  color: "Purple",
  isTurn: true,
  play: function () {
    if (this.isTurn == true) {
      console.log(this.name + "is playing now");
    } else {
      console.log(this.name + "is not playing now");
    }
  },
};

player.play();
player.isTurn = false;
player["color"] = "brown";
console.log(player);
player.play();



