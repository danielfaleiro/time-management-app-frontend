import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3001/api/users';

const updateUser = async (token, id, user) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.put(`${baseUrl}/${id}`, user, config);
    toast.success('User updated.');
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const signUp = async (data) => {
  try {
    const response = await axios.post(baseUrl, data);
    toast.success('Account created. You may now login.');
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const addUser = async (token, data) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.post(`${baseUrl}/manager`, data, config);
    toast.success('User added.');
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const getUserList = async (token) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const deleteUser = async (token, id) => {
  const config = { headers: { Authorization: token } };
  try {
    await axios.delete(`${baseUrl}/${id}`, config);
    toast.success('User deleted.');
    return true;
  } catch (e) {
    toast.error(e.response.data.error);
    return false;
  }
};

export default {
  updateUser,
  signUp,
  getUserList,
  deleteUser,
  addUser,
};
