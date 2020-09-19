import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const updateUser = async (token, id, user) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.put(`${baseUrl}/${id}`, user, config);
  return response.data;
};

const signUp = async (data) => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const addUser = async (token, data) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(`${baseUrl}/manager`, data, config);
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
  addUser,
};
