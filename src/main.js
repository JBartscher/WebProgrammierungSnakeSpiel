"use strict";

import Game from "./Game.js";

console.log("starting game");


let form = document.getElementById("highscore_form");
form.onsubmit = function (e) {
    e.preventDefault();
    let date = new Date();
    let highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
    highscore.push({"name": e.target[1].value, "points": game.score, "timestamp": date.getTime()})
    window.localStorage.setItem('highscore', JSON.stringify(highscore));
    return false;
}


let game = new Game();
game.init(true);
