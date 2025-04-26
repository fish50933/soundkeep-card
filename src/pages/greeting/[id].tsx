// src/pages/greeting/[id].tsx
import React from 'react';
import ReactPlayer from 'react-player';

interface GreetingPageProps {
  id: string;
}

const GreetingPage: React.FC<GreetingPageProps> = ({ id }) => {
  // 假設我們從某個資料庫或 API 根據 id 取得對應的祝福語和語音檔案
  const message = "祝你生日快樂！"; // 這裡可以根據 id 加載不同的訊息
  const audioUrl = `/audio/${id}.mp3`; // 假設語音文件是以 id 命名的

  return (
    <div>
      <h1>{message}</h1>
      <ReactPlayer url={audioUrl} controls={true} />
    </div>
  );
};

// 模擬 Next.js 中的動態路由（你可能需要根據自己的需求來調整）
GreetingPage.getInitialProps = async ({ query }: any) => {
  return { id: query.id };
};

export default GreetingPage;
