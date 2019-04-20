/*
================
Array Mapper
================

[INSTRUCTIONS]

arrayMapper adalah sebuah function yang menerima tiga parameter.
Parameter pertama adalah sebuah array yang bisa terdiri dari tipe data apapun.
Parameter kedua adalah simbol matematika, penambahan, atau simbol pembanding.
Parameter ketiga adalah nilai yang akan menjadi efek operasi atau pembanding.

Untuk setiap nilai array, isi dari masing-masing array akan di operasikan dengan simbol dan effect.

Simbol +, -, *, dan / akan menjalankan proses matematika pada angka.
Simbol === akan membandingkan angka dengan parameter ketiga

Contoh:

targetArr: [1, 2, 3, 4, 5]
operator: +
effect: 5

maka, setiap isi array akan ditambahkan dengan 5, sehingga,
output: [6, 7, 8, 9, 10]

[RULE]
- Wajib menyertakan pseudocode!
- Dilarang menggunakan sintaks .map() !
- Dilarang menggunakan sintaks eval()!
- Dilarang menggunakan rekursif

*/


/* PSEUDOCODE

SET result as an empty array

LOOP through "targetArr" length, increment index by 1
  IF "operator" is equal to a plus sign 
    CALCULATE the value of "targetArr" plus the value of the effect
    PUSH the calculation result to the result array
  IF "operator" is equal to a minus sign
    CALCULATE the value of "targetArr" minus the value of the effect
    PUSH the calculation result to the result array
  IF "operator" is equal to a division sign 
    CALCULATE the value of "targetArr" divided by the value of the effect
    PUSH the calculation result to the result array
  IF "operator" is equal to three equal signs
    CHECK IF the value of "targetArr" is equal to the value of the effect
      IF equal then push "true" to the result array
      IF NOT equal then push "false" to theresult array
END LOOP

DISPLAY result

*/

function arrayMapper(targetArr, operator, effect) {
  // only write code here

  var result = []
  for(var i = 0; i <= targetArr.length-1; i++) {
    if(operator === "+") {
      result.push(targetArr[i] + effect)
    }
    if(operator === "-") {
      result.push(targetArr[i] - effect)
    }
    if(operator === "/") {
      result.push(targetArr[i] / effect)
    }
    if(operator === "===") {
      if(targetArr[i] === effect) {
        result.push(true)
      } else {
        result.push(false)
      }
    }
    
  }
  
  return result
}

console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]
console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
console.log(arrayMapper([1, 3, 3], '===', 3)); // [false, true, true]
