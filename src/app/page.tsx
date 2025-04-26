
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, PauseCircle } from "lucide-react";

const themes = {
  classic: {
    name: "經典信封風",
    bgColor: "bg-amber-50",
    border: "border border-yellow-300",
  },
  minimal: {
    name: "極簡現代風",
    bgColor: "bg-white",
    border: "border border-gray-200",
  },
  spring: {
    name: "溫柔春日風",
    bgColor: "bg-pink-50",
    border: "border border-pink-300",
  },
};

export default function VoiceCard() {
  const [theme, setTheme] = useState("classic");
  const [playing, setPlaying] = useState(false);

  const audio = typeof Audio !== "undefined" ? new Audio("/demo-voice.mp3") : null;

  const togglePlay = () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="min-h-screen p-6 flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold">語音卡片預覽</h1>

      <div className="flex gap-3">
        {Object.entries(themes).map(([key, val]) => (
          <Button key={key} onClick={() => setTheme(key)} variant={theme === key ? "default" : "outline"}>
            {val.name}
          </Button>
        ))}
      </div>

      <Card className={`w-full max-w-md mt-4 p-4 ${themes[theme].bgColor} ${themes[theme].border}`}>
        <CardContent className="flex flex-col items-center text-center gap-3">
          <div className="text-lg font-semibold">給：最親愛的你</div>
          <div className="italic text-gray-600">「希望這段聲音，能陪你度過每個需要微笑的日子」</div>

          <Button onClick={togglePlay} className="mt-2 text-xl">
            {playing ? <PauseCircle size={40} /> : <PlayCircle size={40} />} 播放語音
          </Button>

          <div className="text-sm text-gray-500 mt-4">From: 你的 XX</div>
        </CardContent>
      </Card>
    </div>
  );
}
