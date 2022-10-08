/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Goal from './Goal';

function Goals() {
  const features = [
    {
      name: 'Foundations: How should I manage my money?',
      description:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnamvoluptatum cupiditate veritatis in accusamus quisquam.',
    },
    {
      name: 'Focused: How should I pay off my debts?',
      description:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnavoluptatum cupiditate veritatis in accusamus quisquam.',
    },
    {
      name: 'Focused: How much should I save for retirement?',
      description:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnamiditate veritatis in accusamus quisquam.',
    },
    {
      name: '  Focused: How much should I save for retirement?',
      description:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnamiditate veritatis in accusamus quisquam.',
    },
    {
      name: 'Focused: How much should I save for retirement?',
      description:
        'Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnamiditate veritatis in accusamus quisquam.',
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-indigo-600">Goals</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to choose your goal
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <Goal key={feature.name} feature={feature} />
            ))}
          </dl>
        </div>

      </div>
    </div>
  );
}

export default Goals;
