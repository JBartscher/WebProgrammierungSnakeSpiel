"use strict"

window.onload = function () {
    // works as autostart, even if the page is reloaded
    playGameMusic();

    window.playGameMusic = playGameMusic;
    window.pauseGameMusic = pauseGameMusic;
    window.playPickUpSound = playPickUpSound;
    window.playGameOverSound = playGameOverSound;
}

/**
 * returns weather the sound is enabled
 * @returns {boolean} sound enabled
 */
function soundIsEnabled() {
    let soundIsEnabled = JSON.parse(window.localStorage.getItem("sound"));
    if (soundIsEnabled === null) {
        soundIsEnabled = false;
    }
    return soundIsEnabled;
}

function playGameMusic() {
    if (soundIsEnabled()) {
        document.getElementById("game_music_audioplayer").play();
    }
}

function pauseGameMusic() {
    if (soundIsEnabled()) {
        document.getElementById("game_music_audioplayer").pause();
    }
}


function playPickUpSound() {
    if (soundIsEnabled()) {
        document.getElementById("pick_up_audioplayer").play();
    }
}

function playGameOverSound() {
    if (soundIsEnabled()) {
        document.getElementById("game_over_audioplayer").play();
    }
}

// export {playGameMusic, pauseGameMusic, playGameOverSound, playPickUpSound}