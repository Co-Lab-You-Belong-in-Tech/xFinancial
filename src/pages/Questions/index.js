import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionsForm from './QuestionsForm';

function Questions() {
  const { id } = useParams();
  return <QuestionsForm param={id} />;
}

export default Questions;
