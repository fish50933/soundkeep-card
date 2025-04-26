// src/components/QrCodeGenerator.tsx
import React from 'react';
import QRCode from 'react-qr-code';

interface QrCodeGeneratorProps {
  url: string;
}

const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ url }) => {
  return (
    <div>
      <QRCode value={url} />
    </div>
  );
};

export default QrCodeGenerator;
