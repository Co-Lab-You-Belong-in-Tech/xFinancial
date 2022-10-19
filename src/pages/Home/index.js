import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import IntroSection from './IntroSection';
import Header from '../../components/Header';
import { getGoals } from '../../redux/features/goals/goalsSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
  }, [dispatch]);

  return (
    <>
      <Header />
      <IntroSection />
    </>
  );
}

export default Home;
