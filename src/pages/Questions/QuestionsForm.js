import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getQuestions,
  selectAllQuestions,
  getQuestionsStatus,
} from '../../redux/features/questions/questionsSlice';
import Question from './Question';

const QuestionsForm = () => {
  const dispatch = useDispatch();
  const questions = useSelector(selectAllQuestions);
  const questionsStatus = useSelector(getQuestionsStatus);

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(getQuestions());
    }
  }, [questionsStatus, dispatch]);

  return (
    <>
      <section>
        <div className="mt-20 md:my-20">
          <div className="container mx-auto px-4">
            <h1 className="max-w-1xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-center">
              Tell us about yourself
            </h1>
            <p className="text-center">
              In order to provide personalize recommendations, we need to know a
              few things about you
            </p>
            <form className="flex flex-col items-center justify-center mt-10">
              {questionsStatus === 'loading' ? <div>Loading...</div> : null}
              {questionsStatus === 'succeeded'
                ? questions.map((question) => (
                  <Question key={question.id} ques={question} />
                ))
                : null}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionsForm;
