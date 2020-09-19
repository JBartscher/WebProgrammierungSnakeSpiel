"strict mode";

import {DynamicGameObject} from "./GameObject.js";

export default class Snake extends DynamicGameObject{

    SIZE = 16;

    constructor() {
        super(0,0,16,16);
    }
}