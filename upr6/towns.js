function town(list){
   let townInfo = {} ;

   for (const line of list) {
    let splittedLine = line.split(' | ');
    
    
    let [townName,latitude,longtitude] = line.split(' | ');

    townInfo.town = townName;
    townInfo.latitude = Number(latitude).toFixed(2);
    townInfo.longtitude = Number(longtitude).toFixed(2);

    console.log(townInfo);
    
   }
}  

town(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);