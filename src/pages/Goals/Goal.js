/* eslint-disable react/prop-types */
import React from 'react';
import upward from '../../assets/upward.png';
import homeIcon from '../../assets/home_icon1.png';

function Goal({ goal }) {
  return (
    <>
      <div className="grid grid-cols-1 bg-white p-0">
        <div className="border-2 border-gray-100 border-solid hover:border-gray-500 bg-white w-full p-5 h-">
          <img className="float-right" width="24px" src={upward} alt="arrow" />
          {goal.goal === 'Foundational' && (<img width="24px" src={homeIcon} alt="icon" />)}
          {goal.goal === 'Emergency Fund' && '🚒'}
          {goal.goal === 'Pay Off Debt' && '💸'}
          {goal.goal === 'Retirement' && '👴🏼🧓🏾'}
          {goal.goal === 'F.I.R.E' && '🔥'}
          {goal.goal === 'Other Goals' && '📝'}
          <h2 className="text-2xl font-medium">{goal.goal}</h2>
          <p className="text-sm">{goal.description}</p>
        </div>
      </div>
    </>
  );
}

export default Goal;
