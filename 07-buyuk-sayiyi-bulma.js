let sayi1 = Number(prompt("Birinci sayıyı giriniz:"));
let sayi2 = Number(prompt("İkinci sayıyı giriniz:"));
if (sayi1 > sayi2) {
    console.log("Büyük sayı: " + sayi1);
}
else if (sayi2 > sayi1) {
    console.log("Büyük sayı: " + sayi2);
}
else {
    console.log("Sayılar eşittir.");
}
