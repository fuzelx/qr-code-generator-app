const generateBtn = document.getElementById('generate-btn');
const qrText = document.getElementById('qr-text');
const qrCodeDiv = document.getElementById('qr-code');
const downloadLink = document.getElementById('download-link');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const text = qrText.value;
    if (text) {
        qrCodeDiv.innerHTML = '';

        const qrCode = new QRCode(qrCodeDiv, {
            text: text,
            width: 128,
            height: 128,
        });

        const qrCodeImage = qrCodeDiv.querySelector('img');

        // Set the download link attributes
        downloadLink.href = qrCodeImage.src;
        downloadLink.download = 'qrcode.png';

        // Show the download link
        downloadLink.style.display = 'block';
    }
}
