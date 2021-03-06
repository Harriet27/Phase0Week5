/*
============================
ICE CREAM UNTUK ADI DAN BUDI
============================

[INSTRUCTIONS]

Setiap kali Adi dan Budi jalan-jalan ke toko Es Krim, mereka patungan untuk membeli masing-masing satu Es Krim. Penjual Es Krim menjual masing-masing rasa dengan harga yang berbeda-beda, tergantung ketersediaan bahan-bahan (musim buah tertentu).
Diberikan nilai "uang patungan" (var uang) dan "harga-harga eskrim" (var rasa), bantulah Adi dan Budi memilih dua rasa berbeda sehingga mereka menghabiskan seluruh uang mereka selama setiap ke toko Eskrim. Index eskrim yang dapat dibeli berdasarkan index yang dimulai dari 1.
Tampilkan output dua rasa eskrim dalam bentuk string yang dipisahkan dengan spasi, output harus ditampilkan index rasa yang lebih kecil terlebih dahulu kemudian yang lebih besar!

[Example]
input 1 :  [1, 4, 5, 3, 2]
input 2 : 4
hasilnya adalah rasa ke 1 dan 4, karena uang mereka 4, jadi membeli 1+3 untuk menghabiskan seluruh uang mereka.

[RULES]
1. dilarang menggunakan map, filter, reduce
2. dilarang menggunakan syntax es 6
*/

function rasaApa(rasa, uang) {
  //   code anda disini
  
  var index = []
  for(var i = 0; i <= rasa.length; i++) {
    for(var j = 0; j <= rasa.length; j++) {
      if(i !== j) {
        if(rasa[i] + rasa[j] === uang) {
          index.push(i, j)
        }
      }
    }
  }
  return (index[0] + 1) + " " + (index[1] + 1)
}

console.log(rasaApa([1, 4, 5, 3, 2], 4)); // 1 4

console.log(rasaApa([1, 2, 3, 5, 6], 5)); // 2 3

console.log(rasaApa([4, 3, 2, 5, 7], 8)); // 2 4