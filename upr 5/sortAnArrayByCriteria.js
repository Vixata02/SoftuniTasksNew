function sortAnArrayByCriteria(arr){
    let sortedArray = arr.sort((a, b)=>a.length - b.length || a.localeCompare(b));
    
    sortedArray.forEach(element => {
        console.log(element);
    });
}

sortAnArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);