function lastKNumbersSequance(length , k ){
    let sequance = [1];
    for(let index = 1; index< length; index++){
        let i = Math.max(sequance.length - k, 0);

        let lastElements = sequance.slice(i);
        let sum = 0;
        for (const el of lastElements) {
            sum += el;

            
        }
        sequance.push(sum);
        
    }
    console.log(sequance.join(' '))

}
lastKNumbersSequance(6, 3); 