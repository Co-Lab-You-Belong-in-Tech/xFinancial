/* eslint-disable react/prop-types */
import React from 'react';

function Goal({ goal }) {
  return (
    <div className="relative">
      <dt>
        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
          {/* <feature.icon className="h-6 w-6" aria-hidden="true" /> */}
        </div>
        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
          {goal.goal}
        </p>
      </dt>
      <dd className="mt-2 ml-16 text-base text-gray-500">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
        magnamvoluptatum cupiditate veritatis in accusamus quisquam,
      </dd>
    </div>
  );
}

export default Goal;
