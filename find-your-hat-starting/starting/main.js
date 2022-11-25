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

    static generateField(height, width, percentage=0.18) {

        // declare empty field, area and number of holes
        
        const protField = [];
        const area = height * width;
        const num_holes = Math.ceil(area * percentage);
        
        // declare array with needed values: hat, holes and field path
        
        let valuesArr = []; 
        valuesArr.push(hat); // hat
        for (let i = 0; i < num_holes; i++) {
            valuesArr.push(hole);  // add holes  
        }
        for (let i = 0; i < area - 1 - num_holes; i++) {
            valuesArr.push(fieldCharacter);    // add field path
        }
        
        // shuffle array created above to randomize objects postitions

        function shuffle(arr) {
            let currentIndex = arr.length, randomIndex;
    
            while (currentIndex !== 0) {
    
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
    
                [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
            }
    
            return arr;
        }
    
        let valuesArr1 = shuffle(valuesArr);
    
        // loop that prevents hat being at first position, within slices of the shuffled array are being pushed to the field

        do {
        for (let i = 0; i < area; i += width) {
            protField.push(valuesArr1.slice(i, i + width))
            
        }
        } while (protField[0][0] === hat) 
        
        // put character at position (0,0)

        protField[0][0] = pathCharacter;  
        
        return protField;
    }
    


    game_flow() {

        this.print();
        
        let i = 0
        do {
            
            this.move();
            this.position();
            
            if (this.position() === 1) {
                break;
            }
            i++;

        } while ( i < 25 )
                
    }
}

// const myField = new Field([
//     ['*', '░', 'O'],
//     ['░', 'O', '░'],
//     ['░', '^', '░'],
// ]);

const myField = new Field(
    Field.generateField(7,5)
);

myField.game_flow();
