let sayi1 = Number(prompt("Birinci sayı:"));
let sayi2 = Number(prompt("İkinci sayı:"));
let sayi3 = Number(prompt("Üçüncü sayı:"));
if (sayi1 > sayi2 && sayi1 > sayi3) {
    console.log("En büyük sayı: " + sayi1);
}
else if (sayi2 > sayi1 && sayi2 > sayi3) {
    console.log("En büyük sayı: " + sayi2);
}
else if (sayi3 > sayi1 && sayi3 > sayi2) {
    console.log("En büyük sayı: " + sayi3);
}
else {
    console.log("En az iki sayı birbirine eşit veya tüm sayılar eşit.");
}
