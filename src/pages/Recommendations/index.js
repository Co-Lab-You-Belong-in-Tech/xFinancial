/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import findQuestionRef from '../../logic/analyzeQuestions';
import { selectAllQuestions } from '../../redux/features/questions/questionsSlice';
import { getRecommendations } from '../../redux/features/recommendations/recommendationsSlice';
import Recommendation from './Recommendation';

function Recommendations() {
  const recsState = useSelector((state) => state.recommendations);
  const questions = useSelector(selectAllQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendations());
  }, [dispatch]);

  return (
    <div>
      <h1>Guide</h1>
      <div>
        {recsState.loading && <p>Loading...</p>}
        {!recsState.loading && recsState.error ? (
          <p>Error: {recsState.error}</p>
        ) : null}
        {!recsState.loading && recsState.recommendations.length
          ? recsState.recommendations.map((rec) => {
              const question = findQuestionRef(questions, rec.refQuestion);

              switch (rec.recType) {
                case 'Multi choice': 
                  const options = JSON.parse(rec.option)
                  console.log(options);
                  if (options.includes(question.answer)) {
                    return <Recommendation rec={rec} />;
                  }
                  break;
                case 'Number lesser':
                  if (rec.option < question.answer) {
                    return <Recommendation rec={rec} />;
                  }
                  break;
                case 'Number greater':
                  if (rec.option > question.answer) {
                    return <Recommendation rec={rec} />;
                  }
                  break;
                case 'Number between':
                  const numbers = JSON.parse(rec.option);
                  if (
                    numbers[0] < question.answer &&
                    numbers[1] > question.answer
                  ) {
                    return <Recommendation rec={rec} />;
                  }
                  break;
                default:
                  break;
              }
              return null;
            })
          : null}
      </div>
    </div>
  );
}

export default Recommendations;
