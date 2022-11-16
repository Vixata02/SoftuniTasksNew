function leapYear(year){
    let isLeapYear = Number(year %4 ===0 && Number(year) %100!=0) || year %400 ===0;

    if(isLeapYear){
        console.log('yes');
    }else{
        console.log('no');
    }
}