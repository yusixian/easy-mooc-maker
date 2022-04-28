/*
 * @Author: cos
 * @Date: 2022-04-28 13:44:46
 * @LastEditTime: 2022-04-28 13:45:05
 * @LastEditors: cos
 * @Description:
 * @FilePath: \easy-mooc-maker\src\pages\manage\index.tsx
 */
import React from 'react';
import HomeBanner from '@/components/HomeBanner';
import HomeContent from '@/components/HomeContent';

const Welcome: React.FC = () => {
  return (
    <div>
      <HomeBanner />
      <HomeContent />
    </div>
  );
};

export default Welcome;
