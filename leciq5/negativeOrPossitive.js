function negativeOrPossitive(input){

    let numbers = []
    for (const element of input) {
        let number = Number(element);

        if(number < 0 ){
            numbers.unshift(number)
        }else{
            numbers.push(number);
        }
        
    }

        for (const number of numbers) {
            console.log(number);
            
        }
}

negativeOrPossitive(['7', '-2', '8', '9']);