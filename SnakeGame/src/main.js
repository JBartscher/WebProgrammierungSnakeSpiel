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

    window.location.replace("main.html");

    return true;
}

let walls = JSON.parse(window.localStorage.getItem("walls"));
// getItem("key") || default-value does not work with boolean values in local storage
if(walls === null){
    walls = true;
}
let sound = JSON.parse(window.localStorage.getItem("sound"));
if(sound === null){
    sound = false;
}

/**
 * start the actual game with the parameters we just retrieved form local storage
 * @type {Game}
 */
const game = new Game();
game.init(walls, sound);
