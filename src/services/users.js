import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const updateUser = async (token, id, user) => {
  console.log('user: ', user);
  const config = { headers: { Authorization: token } };
  const response = await axios.put(`${baseUrl}/${id}`, user, config);
  console.log('response: ', response.data);
  return response.data;
};

const signUp = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const getUserList = async (token) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const deleteUser = async (token, id) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {
  updateUser,
  signUp,
  getUserList,
  deleteUser,
};
