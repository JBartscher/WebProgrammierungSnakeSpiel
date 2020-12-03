

export default class SoundManager {

    DaysEnum = Object.freeze({"monday":1, "tuesday":2, "wednesday":3})

    constructor(){
        this.game_music = null;

        // for legacy browsers
        // this.audioContext = window.AudioContext || window.webkitAudioContext;

        this.audioContext = new AudioContext();
    }

    playGameMusic(){
        var audio = new Audio("Assets/Sounds/Music/Another-Day-in-8_Bit-Land.mp3");
        //audio.play();
    }

}