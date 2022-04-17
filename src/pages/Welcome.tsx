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
