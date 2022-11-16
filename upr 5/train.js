function train(arr) {


    let passangersInTrain = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    let arrLength = arr.length;

    for (let index = 0; index < arr.length; index++) {
        let currentRow = arr[index].split(' ');

        if (currentRow[0] == 'Add') {
            let newWagonP = Number(currentRow[1]);
            passangersInTrain.push(newWagonP);

        } else {
            for (let j = 0; j < passangersInTrain.length; j++) {
                let passangersInCurrentWagon = passangersInTrain[j];
                if (passangersInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passangersInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }

        }

    }
    console.log(passangersInTrain.join(' '));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);