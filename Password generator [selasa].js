function changeVocals (str) {
    
    var arrStr = str.split("");
    var alfabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var hurufVokal = "aiueoAIUEO";
    var index;
    var hasil = [];

    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < hurufVokal.length; j++) {
            if (arrStr[i] === hurufVokal[j]) {
                index = alfabet.indexOf(arrStr[i]) + 1;
                arrStr[i] = alfabet[index];
            }
        }
        hasil.push(arrStr[i]);
    }
    return hasil;
}

function reverseWord (str) {
    var balik = [];
    
    for (let i = str.length - 1; i >= 0; i--) {
        balik.push(str[i]);
    }
    return balik;
}

function setLowerUpperCase (str) {
    var hasil = "";

    for (let i = 0; i < str.length; i++) {
        upperCase = str[i].toUpperCase();
        lowerCase = str[i].toLowerCase();

        if (str[i] === upperCase) {
            hasil += lowerCase;
        } else if (str[i] === lowerCase) {
            hasil += upperCase;
        } else {
            hasil += str[i];
        }
    }
    return hasil;
}

function removeSpace (str) {
    var hasil = str.split(" ").join("");
    
    return hasil;
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter.";
    } 
      else {
        
        var ubahHurufVokal = changeVocals(name);
        var balikKata = reverseWord(ubahHurufVokal);
        var balikLowerUpper = setLowerUpperCase(balikKata);
        var hapusSpasi = removeSpaces(balikLowerUpper);
        
        return hapusSpasi;
    }
}

console.log(passwordGenerator("Sergei Dragunov"));
// VPNVGBRdJFGRFs

console.log(passwordGenerator("Dimitri Wahyudiputra"));
// BRTVPJDVYHBwJRTJMJd

console.log(passwordGenerator("Alexei"));
// JFXFLb

console.log(passwordGenerator("Alex"));
// Minimal karakter yang diinputkan adalah 5 karakter.
