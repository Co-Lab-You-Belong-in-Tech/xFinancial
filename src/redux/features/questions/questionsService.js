import axios from '../../api/axios';

const APP_URL = '/exec?action=getQuestions&goalId=';

const getQuestions = async (id) => {
  const resOptions = {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(`${APP_URL}${id}`, resOptions);

  return response.data;
};

const questionService = { getQuestions };

export default questionService;
