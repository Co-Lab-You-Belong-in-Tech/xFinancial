/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Recommendation({ rec }) {
  return (
    <div>
      <input type="checkbox" id="name" />
      <label htmlFor="name">{rec.recommendation}</label>
    </div>
  );
}

export default Recommendation;
