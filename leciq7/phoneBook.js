function phoneBook(input){
    let printphoneBook = {};

    for (const entry of input) {
        let entryArr = entry.split(' ');
        let name = entryArr[0];
        let phone = entryArr[1];

        printphoneBook[name] = phone;

        
    }
    for(let name in printphoneBook){
        console.log(`${name} -> ${printphoneBook[name]}`)
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);