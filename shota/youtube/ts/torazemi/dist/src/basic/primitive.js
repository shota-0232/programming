"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primitiveSample() {
    let name = 'トラハック';
    console.log("primitive sample 1:" + typeof name, name);
    let age = 28;
    console.log("primitive sample 2:" + typeof age, age);
    let isSingle = true;
    console.log("primitive sample 3:" + typeof isSingle, isSingle);
    const isOver20 = age >= 20;
    console.log("primitive sample 4:" + typeof isOver20, isOver20);
}
exports.default = primitiveSample;
