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

        const arrow = prompt('Which way?');
        
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
    }

    position() {

        const rows = this._twodarr.length;
        const columns = this._twodarr[0].length;

        if (this._column < 0 || this._row < 0) {
            console.log('Out of bounds');
            return(1);
        } else if (this._row >= rows || this._column >= columns) {
            console.log('Out of bounds');
            return(1);

        } else {

            if (this._twodarr[this._row][this._column] === hole) {
                console.log('Sorry, you fell down a hole!');
                return(1);
    
            } else if (this._twodarr[this._row][this._column] === fieldCharacter) {
                this._twodarr[this._row][this._column] = pathCharacter;
                this.print();

            } else if (this._twodarr[this._row][this._column] === hat) {
                console.log('Congrats! You found your hat!');
                return(1)

            } //else {
            //     this.print();
            // } 
        }


    }

    game_flow() {

        let i = 0
        do {
            
            this.move();
            this.position();
            
            if (this.position() === 1) {
                break;
            }
            i++;

        } while ( i < 6 )
                
    }
}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);




// do direction() {
//     console.log(myField.print())
// } (while )

// myField.print();
myField.game_flow();
// myField.position();

// console.log(myField._twodarr[0].length)
