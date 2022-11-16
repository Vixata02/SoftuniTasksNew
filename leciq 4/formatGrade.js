function formatGrade(grade){
    let gradeAnotation = '' ;

    if(grade<3){
        gradeAnotation = 'Fail';
        grade = 2;
    }else if(grade<3.50){
        gradeAnotation = 'Poor';
    }else if(grade < 4.5){
        gradeAnotation = 'Good';
    }else if(grade <5.5){
        gradeAnotation = 'Very good';
    }else{
        gradeAnotation = 'Excellent';
    }
    if(gradeAnotation == 'Fail'){
        console.log(`Fail (2)`)
    }else{
        console.log(`${gradeAnotation} (${grade.toFixed(2)})`);
    }
    
}

formatGrade(3.33)