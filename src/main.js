"use strict";

import Game from "./Game.js";
import LinkedList from "./lib/LinkedList.js";

console.log("starting game");


let lL = new LinkedList()
lL.append("1 Element");
lL.append("2 Element");
lL.append("3 Element");
lL.append("4 Element");

for (var obj of lL) {
    console.log(obj);
}


let game = new Game();
game.init();
