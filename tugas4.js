// Film Rating

// Buatlah script untuk menentukan rating suatu film, dengan ketentuan sebagai berikut:

//     Jika usia yang dimasukkan lebih atau sama dengan 21, maka rating film adalah DEWASA.
//     Jika usia yang dimasukkan lebih atau sama dengan 13, maka rating film adalah REMAJA.
//     Jika usia yang dimasukkan lebih atau sama dengan 9, maka rating film adalah BIMBINGAN ORANG TUA.
//     Jika usia yang dimasukkan kurang dari 9, maka rating film adalah SEMUA USIA.

// Contoh:

// Input: 15
// Output: Remaja

// Input: 32
// Output: Dewasa

let usia = 13;

if (usia >= 21) {
    console.log('Dewasa')   
}
else if (usia >= 13) {
    console.log('Remaja')   
}
else if (usia >= 9) {
    console.log('Bimbingan orang tua')   
}
else if (usia < 9) {
    console.log('anak anak')   
}