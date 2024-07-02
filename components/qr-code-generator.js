import QRCode from 'qrcode.react';

export default function QRCodeGenerator({ url }) {
  return (
    <div>
      <h2>Menu QR Code</h2>
      <QRCode value={url} />
    </div>
  );
}
