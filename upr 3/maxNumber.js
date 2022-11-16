function maxNumber(arr){
    let resultArr = [];

    for(let i = 0; i<arr.length; i++){
        let  isBigger = true;
        let currentNumber = arr[i];

        for(let k = i + 1;k<arr.length;k++){
            if(currentNumber <= arr[k]){
                isBigger = false;
            }
            if(isBigger === true){
                resultArr.push(arr[i]);
            }
        }
    }
    console.log(resultArr.join(' '));
}
maxNumber([1, 4, 3, 2])