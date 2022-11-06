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
        <>
          <ul className="grid gap-6 w-full mt-3 md:grid-cols-2">
            {JSON.parse(options).map((option) => (
              <li key={`${option}${id}`}>
                <input
                  className="hidden peer"
                  type="radio"
                  name={id}
                  id={`${option}${id}`}
                  value={option}
                  onChange={getAnswer}
                  required
                />
                <label
                  className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:bg-blue-500 peer-checked:bg-blue-600 peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  htmlFor={`${option}${id}`}
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">{option}</div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </>
      )}
    </label>
  );
}

export default Question;
