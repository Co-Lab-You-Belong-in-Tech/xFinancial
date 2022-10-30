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

const renderQuestion = (question) => {
  return (
    `<div
      key={question.id}
      className={
        steps[${question.section}]
          ? 'active w-full md:w-1/2 px-3 mb-6 md:mb-0'
          : 'inactive'
      }
    >
      <Question key={question.id} ques={question} />
    </div>`
  );
};

const compareQuestions = (questions, question) => {
  const refs = JSON.parse(question.question_ref);

  if (refs.length === 1) {
    const questionRef = findQuestionRef(questions, refs[0]);
    const options = JSON.parse(question.option);
    if (options.includes(questionRef.answer)) {
      renderQuestion(question);
    }
  } else if (refs.length === 2) {
    const questionRef = findQuestionRef(questions, ref[0]);
    const options = JSON.parse(question.option);
    if (options.includes(questionRef.answer)) {
      const questionRef = findQuestionRef(questions, ref[0]);
      const options = JSON.parse(question.option);
      if (options.includes(questionRef.answer)) {
        renderQuestion(question);
      }
    }
  }
};

const recursive = (refs) => {
  if (refs.length === 1) {
    const questionRef = findQuestionRef(questions, refs[0]);
    const options = JSON.parse(question.option);
    if (options.includes(questionRef.answer)) {
      renderQuestion(question);
    }
  } else {
    recursive(refs.unshift())
  }
}
export default findQuestionRef;
