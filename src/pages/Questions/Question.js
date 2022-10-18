/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { answerAdded } from '../../redux/features/questions/questionsSlice';

function Question({ ques }) {
  const [answers, setAnswer] = useState({});
  const { id, type, question, options } = ques;
  const dispatch = useDispatch();
  const getAnswer = (e) => {
    const newAnswer = { questionId: id, answer: e.target.value };
    // if (!answers.length) {
    //   setAnswers((answers) => [...answers, answer]);
    // } else {
    //   setAnswers((answers) => {
    //     answers.map((answer) => {
    //       const updatedAnswer = answer;
    //       if (updatedAnswer.questionId === id) {
    //         updatedAnswer.answer = e.target.value;
    //       }
    //       return updatedAnswer;
    //     });
    //   });
    // }
    setAnswer(newAnswer);
    const answer = e.target.value;
    dispatch(answerAdded({ id, answer }));
  };

  console.log(answers);
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
            onChange={getAnswer}
          />
        )}
        {type === 'Date' && (
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-2"
            id={id}
            type="date"
            placeholder={question}
            onChange={getAnswer}
          />
        )}
        {type === 'Number' && (
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white mt-2"
            id={id}
            type="number"
            placeholder={question}
            onChange={getAnswer}
          />
        )}
        {type === 'Multiple Choice' && (
          <div className="flex justify-start mt-3">
            {JSON.parse(options.replace(/'/g, '"')).map((option, i) => (
              <div className="form-check mb-2" key={`${option}${id}`}>
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
            ))}
          </div>
        )}
      </label>
    </div>
  );
}

export default Question;