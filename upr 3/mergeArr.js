function mergeArr(firstArray, secondArray) {
    let resultArray = [];
    let firstArrLength = firstArray.length;
    for (let firstIndexArray = 0; firstIndexArray < firstArray.length; firstIndexArray++) {
        if (firstIndexArray % 2 === 0) {
            resultArray.push(Number(firstArray[firstIndexArray]) + Number(secondArray[firstIndexArray]));

        } else {
            resultArray.push(firstArray[firstIndexArray] + secondArray[firstIndexArray]);
        }
    }
    console.log(resultArray.join(' - '));
}

mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])