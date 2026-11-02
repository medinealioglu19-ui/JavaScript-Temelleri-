let not1 = Number(prompt("Birinci notu giriniz:"));
let not2 = Number(prompt("İkinci notu giriniz:"));
let ortalama = (not1 + not2) / 2;
console.log("Ortalamanız: " + ortalama);
if (ortalama >= 50) {
    console.log("Geçtiniz.");
}
else {
    console.log("Kaldınız.");
}
