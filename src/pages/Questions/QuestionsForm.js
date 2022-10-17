import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getQuestions,
  selectAllQuestions,
  getQuestionsStatus,
} from '../../redux/features/questions/questionsSlice';

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
                ? questions.map(({
                  id, question, type, options,
                }) => (
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" key={id}>
                    <label
                      className="block sentence tracking-wide text-gray-700 text-xl font-bold mb-2"
                      htmlFor={id}
                    >
                      {question}

                      {type === 'Text' && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-2"
                        id={id}
                        type="text"
                        placeholder={question}
                      />
                      )}
                      {type === 'Date' && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-2"
                        id={id}
                        type="date"
                        placeholder={question}
                      />
                      )}
                      {type === 'Number' && (
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-2"
                        id={id}
                        type="number"
                        placeholder={question}
                      />
                      )}
                      {type === 'Multiple Choice' && (
                      <div className="flex justify-start mt-3">
                        {JSON.parse(options.replace(/'/g, '"')).map(
                          (option, i) => (
                            <div
                              className="form-check mb-2"
                              key={`option${id}`}
                            >
                              <input
                                className="form-check-input px-2"
                                type="radio"
                                name={id}
                                id={id + i}
                              />
                              <label
                                className="form-check-label px-2 text-sm"
                                htmlFor={id + i}
                              >
                                {option}
                              </label>
                            </div>
                          ),
                        )}
                      </div>
                      )}
                    </label>
                  </div>
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
