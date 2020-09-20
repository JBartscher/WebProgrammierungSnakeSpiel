"use strict";

import Game from "./Game.js";

console.log("starting game");

window.onload = function (){
    // The page is completely loaded now
    // You can reference the image element
    let img = document.getElementById("snake_spritesheet");
}

let game = new Game();
game.init();