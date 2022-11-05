/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import findQuestionRef from '../../logic/analyzeQuestions';
import { selectAllQuestions } from '../../redux/features/questions/questionsSlice';
// import { getRecommendations } from '../../redux/features/recommendations/recommendationsSlice';
import { getRecQues } from '../../redux/features/recommendations/recQuesSlice';
import Recommendation from './Recommendation';

function Recommendations() {
  const recQuesState = useSelector((state) => state.recQues);
  const recs = useSelector((state) => state.recommendations);
  const questions = useSelector(selectAllQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecQues());
  }, [dispatch]);

  const { goalId } = useParams();

  const findRecommendation = (recommendations, id) => {
    let recom = {};
    recommendations.forEach((recommendation) => {
      if (recommendation.id === id) {
        recom = recommendation;
      }
    });
    return recom;
  };
  return (
    <div>
      <h1>Guide</h1>
      <div>
        {recQuesState.loading && <p>Loading...</p>}
        {!recQuesState.loading && recQuesState.error ? (
          <p>Error: {recQuesState.error}</p>
        ) : null}
        {!recQuesState.loading && recQuesState.recQues.length
          ? recQuesState.recQues.map((recQue) => {
              const question = findQuestionRef(questions, recQue.question_id);
              console.log(question);
              const recommendation = findRecommendation(
                recs.recommendations,
                recQue.recommendation_id,
              );
              switch (recQue.answer_type) {
                case 'Multi choice':
                  const options = JSON.parse(recQue.expected_answer);
                  // console.log(options);
                  if (options.includes(question.answer)) {
                    return <Recommendation rec={recommendation} />;
                  }
                  break;
                case 'Number lesser':
                  if (recQue.expected_answer < question.answer) {
                    return <Recommendation rec={recommendation} />;
                  }

                  break;
                case 'Number greater':
                  if (recQue.expected_answer > question.answer) {
                    return <Recommendation rec={recommendation} />;
                  }

                  break;
                case 'Number between':
                  const numbers = JSON.parse(recQue.expected_answer);
                  if (
                    numbers[0] < question.answer &&
                    numbers[1] > question.answer
                  ) {
                    return <Recommendation rec={recommendation} />;
                  }

                  break;
                default:
                  break;
              }
              return null;
            })
          : null}
      </div>
      <button
        className="btn rounded-sm bg-sky-600 px-3 text-white"
        onClick={() => navigate(`/form/${goalId}`)}
      >
        Edit answers
      </button>
    </div>
  );
}

export default Recommendations;
