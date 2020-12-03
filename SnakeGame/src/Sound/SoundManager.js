//import {playGameMusic, playPickUpSound, pauseGameMusic, playGameOverSound} from "../../../js/gamesound.js"

export default class SoundManager {

    static playGameMusic(){
        window.playGameMusic();
    }

    static pauseGameMusic(){
        window.pauseGameMusic();
    }

    static playPickUp(){
        window.playPickUpSound();
    }

    static playGameOver(){
        window.playGameOverSound();
    }
}