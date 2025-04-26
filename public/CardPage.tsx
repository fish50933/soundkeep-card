// src/pages/CardPage.tsx 或其他頁面
import React from 'react';
import GreetingCard from '@/components/GreetingCard'; // 引入你的 GreetingCard 元件

const CardPage: React.FC = () => {
  return (
    <div>
      <h1>歡迎來到語音祝福卡片</h1>
      <GreetingCard audioFile="123.mp3" /> {/* 傳遞音檔名稱 */}
    </div>
  );
};

export default CardPage;
