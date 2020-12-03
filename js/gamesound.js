"use strict"

window.onload = function() {
    if(soundIsEnabled()) {
        document.getElementById("game_music_audioplayer").play();
    }
}

function soundIsEnabled(){
    let sound = JSON.parse(window.localStorage.getItem("sound"));
    if(sound === null){
        sound = false;
    }
    return sound;
}