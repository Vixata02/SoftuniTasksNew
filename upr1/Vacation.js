function vacation(people, groupType, dayOfWeek ){
    let totalPrice = 0;

    switch(groupType){
        case 'Students':
            if(dayOfWeek === 'Friday'){
                totalPrice = people * 8.45;
            }else if(dayOfWeek=== "Saturday"){
                totalPrice = people * 9.80;

            }else if(dayOfWeek==='Sunday'){
                totalPrice = people * 10.46;

            }

            if(people >=30){
                totalPrice = totalPrice * 0.85;
            }
            break;
        
        case 'Business':
            if(people>=100){
                people -=10;
            }
            if(dayOfWeek === 'Friday'){
                totalPrice = people * 10.90;

            }else if(dayOfWeek=== "Saturday"){
                totalPrice = people * 15.60;

            }else if(dayOfWeek==='Sunday'){
                totalPrice = people * 16;

            }

            
            break;
        
        case 'Regular':
            if(dayOfWeek === 'Friday'){

            }else if(dayOfWeek=== "Saturday"){

            }else if(dayOfWeek==='Sunday'){

            }
            break;
        
    }

}

vacation(30,
    "Students",
    "Sunday"
    )