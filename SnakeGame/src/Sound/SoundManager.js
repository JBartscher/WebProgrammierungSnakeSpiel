/**
 * simple facade to have a interface to talk to from game code which will be sitting in a module and can there for not
 * access scripts.
 */
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