// src/components/GreetingCard.tsx
import React from 'react';

interface GreetingProps {
  audioFile: string;
}

const GreetingCard: React.FC<GreetingProps> = ({ audioFile }) => {
  return (
    <div>
      <h2>祝福語</h2>
      <p>這是你的祝福語內容</p>
      <audio controls>
        <source src={`/audio/${audioFile}`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default GreetingCard;
