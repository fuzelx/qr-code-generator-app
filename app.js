const generateBtn = document.getElementById('generate-btn');
const qrText = document.getElementById('qr-text');
const qrCodeDiv = document.getElementById('qr-code');
const downloadLink = document.getElementById('download-link');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const text = qrText.value;
    if (text) {
        qrCodeDiv.innerHTML = ''; // Clear previous QR codes
        downloadLink.style.display = 'none';

        const qrCode = new QRCode(qrCodeDiv, {
            text: text,
            width: 128,
            height: 128,
        });

        const qrCodeImage = qrCodeDiv.querySelector('img');
        qrCodeImage.onload = () => {
            downloadLink.href = qrCodeImage.src;
            downloadLink.style.display = 'block';
        };
    }
}
