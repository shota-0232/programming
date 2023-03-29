"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unknownSample() {
    const maybeNumber = 10;
    console.log("unknown sample 1:" + typeof maybeNumber, maybeNumber);
    const isFoo = maybeNumber === "foo";
    console.log("unknown sample 2:" + typeof isFoo, isFoo);
    // const sum = maybeNumber + 10
    if (typeof maybeNumber === 'number') {
        const sum = maybeNumber + 10;
        console.log("unknown sample 3:" + typeof sum, sum);
    }
}
exports.default = unknownSample;
