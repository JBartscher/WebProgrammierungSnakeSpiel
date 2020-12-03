"use strict"

window.onload = function () {
    let highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
    highscore.sort(compareHighscore);

    // takes the top 10 players
    highscore = highscore.slice(0, 10);

    // remove all static highscore entries
    document.getElementById("button_container").innerHTML = '';

    for (let i = 0; i < highscore.length; i++) {
        createEntry(i+1 ,highscore[i].name, highscore[i].points);
    }

}

function compareHighscore(a, b) {
    if (a.points > b.points) {
        return -1;
    }
    if (a.points < b.points) {
        return 1;
    }
    return 0;
}

/**
 * creates a new highscore-html-representation and add it in the highscore list
 * the element will look like this:
 *
 *   <div class="menu_item flex_container">
 *      <h6>1 <-- Position</h6>
 *      <h5>AAA <-- Name</h5>
 *      <h6>123 <-- Score</h6>
 *   </div>
 *
 * @param pos - position in highscore
 * @param name - name of player
 * @param score - game score
 */
function createEntry(pos, name, score){
    let div = document.createElement("DIV");
    div.classList.add("menu_item");
    div.classList.add("flex_container");

    let posH6 = document.createElement("H6");
    posH6.innerText = pos;
    let nameH5 = document.createElement("H5");
    nameH5.innerText = name;
    let scoreH6 = document.createElement("H6");
    scoreH6.innerText = score;

    div.appendChild(posH6);
    div.appendChild(nameH5);
    div.appendChild(scoreH6);

    document.getElementById("button_container").appendChild(div);

}
