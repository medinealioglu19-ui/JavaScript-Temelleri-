//Meyve dizisi
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
console.log(meyveler);
console.log(meyveler[0]);
console.log(meyveler[1]);

//Dizideki sayıları toplama
let sayilar = [10, 20, 30, 40, 50];
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
    toplam = toplam + sayilar[i];
}
console.log("Toplam: " + toplam);

//Fonksiyon ile toplama
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}
let sonuc = topla(10, 20);
console.log("Sonuç: " + sonuc);

//Fonksiyon ile kare hesaplama
function kareAl(sayi) {
    return sayi * sayi;
}
let sonuc = kareAl(5);
console.log("Sayının karesi: " + sonuc);

//Fonksiyon ile tek-çift kontrolü
function kontrolEt(sayi) {
    if (sayi % 2 == 0) {
        return "Çift sayı";
    }
    else {
        return "Tek sayı";
    }
}
console.log(kontrolEt(8));
console.log(kontrolEt(7));
