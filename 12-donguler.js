//for döngüsü
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//1'den 100'e kadar sayıları toplama
let toplam = 0;
for (let i = 1; i <= 100; i++) {
    toplam = toplam + i;
}

//Çarpım tablosu
let sayi = Number(prompt("Bir sayı giriniz:"));
for (let i = 1; i <= 10; i++) {
    console.log(sayi + " x " + i + " = " + (sayi * i));
}
console.log("Toplam: " + toplam);

//Geriye doğru sayma
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Bitti!");


//while döngüsü
let sayi = 1;
while (sayi <= 10) {
    console.log(sayi);
    sayi++;
}

