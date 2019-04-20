function sorting (arrNumber) {
    return arrNumber.sort();
}

function getTotal (arrNumber) {
    if (!arrNumber(0)) {
        return ""
    }
    
    var numTerbesar = Math.max.apply(Math, arrNumber);
    var frequency = 0;

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[arrNumber.length-1] === arrNumber[i]) {
            frequency ++
        }
    }
    return "Angka paling besar adalah " + numTerbesar + " dan jumlah kemunculan sebanyak " + frequency + " kali.";
}

function mostFrequentLargestNumber (arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumber([2, 8, 4, 6, 8, 5, 8, 4]));
// Angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali.

console.log(mostFrequentLargestNumber([122, 122, 130, 100, 135, 100, 135, 150]));
// Angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali.

console.log(mostFrequentLargestNumber([1, 1, 1, 1]));
//Angka paling besar adalah 1 dan 