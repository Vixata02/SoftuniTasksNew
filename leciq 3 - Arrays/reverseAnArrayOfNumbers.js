function reverseAnArray(count, numbers) {
    let arr = [];
    

    for (let i = 0; i < count; i++) {
        arr[count - 1 - i] = numbers[i];
    }

    console.log(arr.join(' '));
}

reverseAnArray(3, [10, 20, 30, 40, 50]);