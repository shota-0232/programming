"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alwaysThrowError = exports.logMessage4 = exports.logMessage3 = exports.logMessage2 = exports.logMessage = void 0;
// アロー関数
const logMessage = (message) => {
    console.log('Function basic sample 1:', message);
};
exports.logMessage = logMessage;
// 名前付き関数
function logMessage2(message) {
    console.log('Function basic sample 2:', message);
}
exports.logMessage2 = logMessage2;
// 関数式
const logMessage3 = function (message) {
    console.log('Function basic sample 3:', message);
};
exports.logMessage3 = logMessage3;
// アロー関数の省略記法
const logMessage4 = (message) => console.log('Function basic sample 4:', message);
exports.logMessage4 = logMessage4;
const alwaysThrowError = (message) => {
    throw new Error(message);
};
exports.alwaysThrowError = alwaysThrowError;
// 呼び出しシグネチャ（省略記法）
// type LogMessage = (message: string) => VoidFunction
