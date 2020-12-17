"use strict"

window.onload = function () {
    // works as autostart, even if the page is reloaded
    playGameMusic();
    // make them available to the window to be called from within a module
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

/**
 * plays game music.
 *
 * The sound
 */
function playGameMusic() {
    if (soundIsEnabled()) {
        document.getElementById("game_music_audioplayer").play();
    }
}
/**
 * plauses game music
 */
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