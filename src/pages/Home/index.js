import React from 'react';
import IntroSection from './IntroSection';
import GoalsSection from './GoalsSection';
import Header from '../../components/Header';

function Home() {
  return (
    <>
      <Header />
      <IntroSection />
      <GoalsSection />
    </>
  );
}

export default Home;
