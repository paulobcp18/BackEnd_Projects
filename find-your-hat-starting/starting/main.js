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

    set set_new_value(updated_field) {
        this._twodarr = updated_field;
    }

    get position() {
        this._twodarr[row][column];
    }

    test_move() {
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
        
        if (this._twodarr[this._row][this._column] === hole) {
            console.log('Sorry, you fell down a hole!');

        } else if (this._twodarr[this._row][this._column] === fieldCharacter) {
            this._twodarr[this._row][this._column] = pathCharacter;
            this.print();

        } else if (this._row < 0 || this._row >= this._twodarr.length) {
            console.log('Out of bounds')
        } else if (this.column < 0 || this_column >= this._twodarr[0].length) {
            console.log('Out of bounds')
        }
        
    }



    move() {
        switch(direction()) {
            
            case 'r':
                if (this._twodarr[i][j+1] === fieldCharacter) {
                    this._twodarr[i][j] = pathCharacter;
                    this._twodarr[i][j+1] = pathCharacter;
                } else if (this._twodarr[i][j+1] === hole) {
                    console.log('Sorry, you fell down a hole!')
                    break;
                } else {
                    console.log('Out of bounds!')
                    break
                }

            case 'l':
                if (this._twodarr[i][j+1] === fieldCharacter) {
                this._twodarr[i][j] = pathCharacter;
                this._twodarr[i][j-1] = pathCharacter;
                } else if (this._twodarr[i][j+1] === hole) {
                    console.log('Sorry, you fell down a hole!')
                    break;
                } else {
                    console.log('Out of bounds!')
                    break
                }
                
            case 'u':
                if (this._twodarr[i][j+1] === fieldCharacter) {
                    this._twodarr[i][j] = pathCharacter;
                    this._twodarr[i-1][j] = pathCharacter;
                } else if (this._twodarr[i][j+1] === hole) {
                    console.log('Sorry, you fell down a hole!')
                    break;
                } else {
                    console.log('Out of bounds!')
                    break
                }     
                
            case 'd':
                if (this._twodarr[i][j+1] === fieldCharacter) {
                    this._twodarr[i][j] = pathCharacter;
                    this._twodarr[i+1][j] = pathCharacter;
                } else if (this._twodarr[i][j+1] === hole) {
                    console.log('Sorry, you fell down a hole!')
                    break;
                } else {
                    console.log('Out of bounds!')
                    break
                }
        }
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['O', 'O', '░'],
    ['░', '^', '░'],
]);


const direction = prompt('Which way?');

// do direction() {
//     console.log(myField.print())
// } (while )

// myField.print();
myField.test_move();