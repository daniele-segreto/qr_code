// Testo o URL che desideri convertire in codice QR
let testoCodiceQR = "https://www.example.com";

// Crea un nuovo oggetto QRCode
let qrcode = new QRCode(document.getElementById("qrcode"), {
    text: testoCodiceQR,
    width: 128,
    height: 128
});