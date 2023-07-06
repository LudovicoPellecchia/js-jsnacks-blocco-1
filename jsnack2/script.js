const numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let total = 0

for (i = 0; i < numbArray.length; i++) {
    const currentNumb = numbArray[i]

    if (currentNumb % 2 != 0) {
        total+=numbArray[i]
    }


}

console.log(total)
