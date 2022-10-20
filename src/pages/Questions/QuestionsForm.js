/* eslint-disable */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import findQuestionRef from '../../logic/analyzeQuestions';

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
  const navigate = useNavigate();

  const [steps, setSteps] = useState({
    Intro: true,
    Employment: false,
    Debt: false,
  });

  useEffect(() => {
    if (questionsStatus === 'idle') {
      dispatch(getQuestions());
    }
  }, [questionsStatus, dispatch]);

  // const findQuestionRef = (questions, refId) => {
  //   let question = {};
  //   if (questions.length) {
  //     questions.forEach((ques) => {
  //       if (ques.id === refId) {
  //         question = ques;
  //       }
  //     });
  //   }
  //   return question;
  // };

  const prev = () => {
    if (steps['Intro'] === true) {
      navigate('/goals');
    } else if (steps['Employment'] === true) {
      setSteps({
        Intro: true,
        Employment: false,
        Debt: false,
      });
    } else {
      setSteps({
        Intro: false,
        Employment: true,
        Debt: false,
      });
    }
  };

  const next = () => {
    if (steps['Intro'] === true) {
      setSteps(() => ({
        Intro: false,
        Employment: true,
        Debt: false,
      }));
    } else if (steps['Employment'] === true) {
      setSteps(() => ({
        Intro: false,
        Employment: false,
        Debt: true,
      }));
    } else {
      return null;
    }
  };
  const submitAnswers = () => {
    navigate('/recommendations')
  };
  return (
    <>
      <section>
        <div className="mt-20 md:my-20">
          <div className="container mx-auto px-4">
            {!steps['Employment'] && !steps['Debt'] && (
              <>
                <h1 className="max-w-1xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                  Tell us about yourself
                </h1>
                <p className="text-center">
                  In order to provide personalize recommendations, we need to
                  know a few things about you
                </p>
              </>
            )}
            {!steps['Intro'] && !steps['Debt'] && (
              <h1 className="max-w-1xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                Employment
              </h1>
            )}
            {!steps['Employment'] && !steps['Intro'] && (
              <h1 className="max-w-1xl mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center">
                Debt
              </h1>
            )}
            <form className="flex flex-col items-center justify-center mt-10">
              {questionsStatus === 'loading' ? <div>Loading...</div> : null}
              {questionsStatus === 'succeeded'
                ? questions.map((question) => {
                    console.log(question.section, steps[`${question.section}`]);
                    if (question.question_ref === 0) {
                      return (
                        <div
                          key={question.id}
                          className={
                            steps[`${question.section}`]
                              ? 'active w-full md:w-1/2 px-3 mb-6 md:mb-0'
                              : 'inactive'
                          }
                        >
                          <Question ques={question} />
                        </div>
                      );
                    }
                    const questionRef = findQuestionRef(questions, question.question_ref);
                    if (question.option.includes(questionRef.answer)) {
                      return (
                        <div
                          key={question.id}
                          className={
                            steps[`${question.section}`]
                              ? 'active w-full md:w-1/2 px-3 mb-6 md:mb-0'
                              : 'inactive'
                          }
                        >
                          <Question key={question.id} ques={question} />
                        </div>
                      );
                    }

                    return null;
                  })
                : null}
              <div className="flex gap-3">
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                  onClick={prev}
                >
                  Back
                </button>
                {steps['Debt'] ? (
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                    onClick={submitAnswers}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
                    onClick={next}
                  >
                    Next
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuestionsForm;
