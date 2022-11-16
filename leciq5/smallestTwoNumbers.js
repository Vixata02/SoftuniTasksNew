function smallestTwoNumbers(num){
    let result = num.sort((a, b)=> a - b).slice(0,2).join(' ');
    console.log(result);

}

smallestTwoNumbers([3, 0, 10, 4, 7, 3]);