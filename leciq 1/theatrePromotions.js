function theatrePromotions(day , age){
    let ticketPrice = 0;
    switch (day) {
        case 'Weekday':
            if(age>= 0 && age <= 18){
                ticketPrice = 12;
            }else if(18<age && age<=64){
                ticketPrice = 18;
            }else if(65<age && age <=122){
                ticketPrice = 12;
            }
            
            break;
        case 'Weekend':

            break;
    
        case 'Holiday':
            break;
        
            

    }
    if(ticketPrice !== "Error")
    console.log(ticketPrice + '$');
}

theatrePromotions('Weekday', 121)