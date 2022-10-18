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
  // const [test, setTest] = useState(false);

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(getQuestions());
    }
  }, [questionsStatus, dispatch]);

  const findQuestionRef = (refId) => {
    let question = {};
    if (questions.length) {
      questions.forEach((ques) => {
        if (ques.id === refId) {
          question = ques;
        }
      });
    }
    return question;
  };

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
                ? questions.map((question) => {
                  if (question.question_ref === 0) {
                    return <Question key={question.id} ques={question} />;
                  }
                  const questionRef = findQuestionRef(question.question_ref);
                  console.log(question.option);
                  if (question.option.includes(questionRef.answer)) {
                    return <Question key={question.id} ques={question} />;
                  }

                  return null;
                })
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
