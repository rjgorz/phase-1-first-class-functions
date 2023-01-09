function receivesAFunction(func) {
    func();
}

function returnsANamedFunction() {
    return function named() {
        console.log(`I'm a named function!`);
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log(`I'm an anonymous function!`);
    }
}