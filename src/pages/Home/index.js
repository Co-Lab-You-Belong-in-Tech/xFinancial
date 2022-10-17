import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestions } from '../../redux/questions/questionsSlice';
import IntroSection from './IntroSection';
import Header from '../../components/Header';
import { getGoals } from '../../redux/goals/goalsSlice';

function Home() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.question);

  useEffect(() => {
    dispatch(getGoals());
    dispatch(getQuestions(2));
  }, [dispatch]);

  console.log(questions);

  return (
    <>
      <Header />
      <IntroSection />
    </>
  );
}

export default Home;
