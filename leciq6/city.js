function city(city){
   for (const key of object.keys(city)) {
        console.log(`${key} -> ${city[key]}`)
    
   }
}

printCity({
    name : "Sofia",
    area : 492,
    population : "132161",
    country : "Bulgaria",
    postcode : "1000",

})

