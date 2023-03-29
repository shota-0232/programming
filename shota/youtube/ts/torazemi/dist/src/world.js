"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class World {
    constructor(message) {
        this.message = message;
    }
    sayHello(elem) {
        if (elem) {
            elem.innerText = this.message;
        }
    }
}
exports.default = World;
