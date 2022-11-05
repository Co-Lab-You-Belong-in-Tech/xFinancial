import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import IntroSection from './IntroSection';
import Header from '../../components/Header';
import { getGoals } from '../../redux/features/goals/goalsSlice';
import { getRecommendations } from '../../redux/features/recommendations/recommendationsSlice';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoals());
    dispatch(getRecommendations());
  }, [dispatch]);

  return (
    <>
      <Header />
      <IntroSection />
    </>
  );
}

export default Home;
