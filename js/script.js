// Testo o URL che desideri convertire in codice QR
let testoCodiceQR = "https://www.arduino.cc/";

// Crea un nuovo oggetto QRCode
let qrcode = new QRCode(document.getElementById("qrcode"), {
    text: testoCodiceQR,
    width: 500,
    height: 500 // altezza
});