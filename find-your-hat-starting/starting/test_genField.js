const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


function generateField(height, width, percentage=0.18) {

    const protField = [];
    const area = height * width;
    const num_holes = Math.ceil(area * percentage);
    
    // for (let i = 0; i < height; i++) {
    //     protField.push([]);
    // }

    let valuesArr = [];
    valuesArr.push(hat);
    for (let i = 0; i < num_holes; i++) {
        valuesArr.push(hole);    
    }
    for (let i = 0; i < area - 1 - num_holes; i++) {
        valuesArr.push(fieldCharacter);    
    }
    // console.log(valuesArr);

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
    // console.log(valuesArr1);
    
    
    // console.log(valuesArr1.slice(0,3))
    // console.log(valuesArr1.slice(3,6))
    // console.log(valuesArr1.slice(6,9))
    // console.log(valuesArr1.slice(9,12))
    // console.log(valuesArr1.slice(12,15))

    do {
    for (i = 0; i < area; i += width) {
        protField.push(valuesArr1.slice(i, i + width))
        
    }
    } while (protField[0][0] === hat) 

    protField[0][0] = pathCharacter;

    // for (let i = 0; i < height; i++) {
    //     protField[i] = [];
    //     for (let j = 0; j < width; j++) {
    //         // if (i === 0 && j === 0) continue;
    //         protField[i][j] = valuesArr1[i+j];
    //     }
    // }

    // // for (var i = 0; i < height; i++) {
    // //     protField[i] = [];
    //     for (var j = 0; j < width; j++) {
    //         protField[i][j] = valuesArr1[i+j];
    //     }
    // }

    
    
    for (let i = 0; i < protField.length; i++) {
        console.log(protField[i]);
    }

}


generateField(5,6);
