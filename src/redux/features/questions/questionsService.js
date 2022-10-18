import axios from '../../api/axios';

const APP_URL = '/exec?action=getQuestions&goalId=1';

const getQuestions = async () => {
  const resOptions = {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.get(APP_URL, resOptions);

  return response.data;
};

const questionService = { getQuestions };

export default questionService;
