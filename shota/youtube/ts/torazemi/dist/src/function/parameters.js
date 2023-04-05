"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumProductsPrice = exports.isUserSignedIn2 = exports.isUserSignedIn = void 0;
// オプションパラメーターを持つ関数
const isUserSignedIn = (userId, username) => {
    if (userId === 'ABC') {
        console.log('Function parameters sample 1: User is signed in! Username is', username);
        return true;
    }
    else {
        console.log('Function parameters sample 2: User is not signed in!');
        return false;
    }
};
exports.isUserSignedIn = isUserSignedIn;
// デフォルトパラメーターを持つ関数
const isUserSignedIn2 = (userId, username = 'NO NAME') => {
    if (userId === 'ABC') {
        console.log('Function parameters sample 3: User is signed in! Username is', username);
        return true;
    }
    else {
        console.log('Function parameters sample 4: User is not signed in!');
        return false;
    }
};
exports.isUserSignedIn2 = isUserSignedIn2;
// レストパラメーターを持つ関数
const sumProductsPrice = (...productsPrice) => {
    return productsPrice.reduce((prevTotal, productPrice) => {
        return prevTotal + productPrice;
    }, 0);
};
exports.sumProductsPrice = sumProductsPrice;
