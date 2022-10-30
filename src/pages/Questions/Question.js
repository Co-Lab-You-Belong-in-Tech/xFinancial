/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { answerAdded } from '../../redux/features/questions/questionsSlice';

function Question({ ques }) {
  const { id, type, question, options } = ques;
  const dispatch = useDispatch();
  const getAnswer = (e) => {
    const answer = e.target.value;
    dispatch(answerAdded({ id, answer }));
  };

  return (
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
          {JSON.parse(options).map((option, i) => (
            <div className="form-check mb-2" key={`${option}${id}`}>
              <input
                className="form-check-input px-2"
                type="radio"
                name={id}
                id={id + i}
                value={option}
                onChange={getAnswer}
              />
              <label className="form-check-label px-2 text-sm" htmlFor={id + i}>
                {option}
              </label>
            </div>
          ))}
        </div>
      )}
    </label>
  );
}

export default Question;
