const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


let Field = class {
    constructor(twodarr) {
        this.twodarr = twodarr;
    }

    print() {
        console.log(this.twodarr);
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);