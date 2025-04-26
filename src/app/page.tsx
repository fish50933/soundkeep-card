'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const themes = {
  classic: {
    name: '經典',
    bgColor: 'bg-white',
    border: 'border border-gray-300',
  },
  minimal: {
    name: '極簡',
    bgColor: 'bg-gray-100',
    border: 'border border-gray-200',
  },
  spring: {
    name: '春天',
    bgColor: 'bg-green-100',
    border: 'border border-green-300',
  },
};

// 幫 theme 定義出一個安全的類型
type ThemeKey = keyof typeof themes;

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeKey>('classic');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex space-x-4">
        {Object.entries(themes).map(([key, { name }]) => (
          <button
            key={key}
            onClick={() => setTheme(key as ThemeKey)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {name}
          </button>
        ))}
      </div>

      {/* 這邊改成正確指定 theme 型別 */}
      <Card className={`w-full max-w-md mt-8 p-6 ${themes[theme].bgColor} ${themes[theme].border}`}>
        <CardContent className="flex flex-col items-center text-center gap-3">
          <div className="text-lg font-semibold">給：最親愛的你</div>
          <div className="italic text-gray-600">
            「希望這段聲音，能陪你度過每個需要微笑的日子」
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
