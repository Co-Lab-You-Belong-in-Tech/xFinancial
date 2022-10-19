/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecommendations } from '../../redux/features/recommendations/recommendationsSlice';

function Recommendations() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendations());
  });
  
  return (
    <div>
      <h1>Guide</h1>
      <div></div>
    </div>
  );
}

export default Recommendations;
