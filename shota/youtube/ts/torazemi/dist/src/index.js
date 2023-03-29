"use strict";
// import World from './world'
Object.defineProperty(exports, "__esModule", { value: true });
// const root = document.getElementById('root')
// const world = new World('Hello world!')
// world.sayHello(root)
// 03.基本の型定義
// import { unknownSample, anySample, notExistSample, premitiveSample } from "./basic"
// unknownSample()
// anySample()
// notExistSample()
// premitiveSample()
// 04.関数の型定義
const basic_1 = require("./function/basic");
const parameters_1 = require("./function/parameters");
(0, basic_1.logMessage)('Hello TypeScript');
(0, basic_1.logMessage2)('Hello TypeScript');
(0, basic_1.logMessage3)('Hello TypeScript');
(0, basic_1.logMessage4)('Hello TypeScript');
// alwaysThrowError('Errorrrrrrrrrr')
(0, parameters_1.isUserSignedIn)('ABC', 'shota');
(0, parameters_1.isUserSignedIn)('DEF');
(0, parameters_1.isUserSignedIn2)('ABC');
(0, parameters_1.isUserSignedIn2)('DEF');
const sum = (0, parameters_1.sumProductsPrice)(100, 200, 300, 400, 500);
console.log('Function parameters sample 5:', sum);
