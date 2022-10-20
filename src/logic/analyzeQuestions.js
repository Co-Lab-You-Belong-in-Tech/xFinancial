/* eslint-disable */
const findQuestionRef = (questions, refId) => {
  let question = {};
  if (questions.length) {
    questions.forEach((ques) => {
      if (ques.id === refId) {
        question = ques;
      }
    });
  }
  return question;
};

export default findQuestionRef;
