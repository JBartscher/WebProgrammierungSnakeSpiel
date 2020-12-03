/**
 * gets the option-value for walls and sound from localStorage or sets default values.
 *
 * getItem(key) has no default value (except null), trying 'getItem(key) || default-value' does not work
 * with boolean values (and also not with empty strings.
 * See: https://stackoverflow.com/questions/13791569/specify-default-value-for-html5-local-storage-item )
 */
window.onload = function () {
    let walls = JSON.parse(window.localStorage.getItem("walls"));
    // getItem("key") || default-value does not work with boolean values in local storage
    if(walls === null){
        walls = true;
    }
    let sound = JSON.parse(window.localStorage.getItem("sound"));
    if(sound === null){
        sound = false;
    }

    let sound_option = document.getElementById("sound_option");
    sound_option.checked = sound;

    let walls_option = document.getElementById("walls_option");
    walls_option.checked = walls;
}

/**
 * changes the value of options in localStorage
 * @param event inputChagedEvent
 * @param option "sound" or "walls"
 */
function changeOptionEventHandler(event, option) {
    window.localStorage.setItem(option, event.target.checked);
}
