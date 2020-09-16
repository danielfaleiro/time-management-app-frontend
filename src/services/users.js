import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const updateUser = async (token, user) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.put(baseUrl, user, config);
  return response.data;
};

const signUp = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export default {
  updateUser,
  signUp,
};
