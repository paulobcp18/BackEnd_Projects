const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';



let Field = class {
    constructor(twodarr, row=0, column=0) {
        this._twodarr = twodarr;
        this._column = column;
        this._row = row;
    }

    print() {
        for (let i = 0; i < this._twodarr.length; i++) {
            console.log(this._twodarr[i]);
        }
        
    }

    field_now() {
        this._twodarr = this.move()
    }

    move() {
        let arrow = direction;
        if (arrow === 'd') {
            this._row += 1;
        } else if (arrow === 'u') {
            this._row -= 1;
        } else if (arrow === 'r') {
            this._column += 1;
        } else if (arrow === 'l') {
            this._column -= 1;
        } else {
            console.log('unknown command')
        }

        if (this._column < 0 || this._row < 0) {
            console.log('Out of bounds')
        } else {

            if (this._twodarr[this._row][this._column] === hole) {
                console.log('Sorry, you fell down a hole!');
    
            } else if (this._twodarr[this._row][this._column] === fieldCharacter) {
                this._twodarr[this._row][this._column] = pathCharacter;
                this.print();
                return(this._twodarr);

            } else if (this._column >= this._twodarr[0].length || this._row >= this._twodarr.length) {
                    console.log('Out of bounds')

            }
        }


    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);


const direction = prompt('Which way?');

// do direction() {
//     console.log(myField.print())
// } (while )

// myField.print();
myField.field_now();