import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const signUp = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export default { signUp };
