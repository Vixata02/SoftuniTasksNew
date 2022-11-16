function addAndSubtract(input){
    let resultArr = [];
    let inputArrSum = 0;
    let resultArrSum = 0;
    let inputLength = input.length;

    for(let i = 0;i<input.length; i++){
        let currentNumber = input[i];

      let odd = currentNumber - i;
      let even = currentNumber + i;

        if(currentNumber %2 ==0){
            resultArr.push(even);
        }else{
            resultArr.push(odd);
        }
        inputArrSum += currentNumber;
        resultArr += resultArr[i];
    }
     console.log(resultArr);
     console.log(inputArrSum);
     console.log(resultArrSum);
}

addAndSubtract([5, 15, 23, 56, 35])