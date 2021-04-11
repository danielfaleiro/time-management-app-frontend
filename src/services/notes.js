import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3001/api/notes';

const getNotes = async (token) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.get(baseUrl, config);
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const addNote = async (token, note) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.post(baseUrl, note, config);
    toast.success('Note added.');
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

const deleteNote = async (token, id) => {
  const config = { headers: { Authorization: token } };
  try {
    await axios.delete(`${baseUrl}/${id}`, config);
    toast.success('Note deleted.');
    return true;
  } catch (e) {
    toast.error(e.response.data.error);
    return false;
  }
};

const updateNote = async (token, note) => {
  const config = { headers: { Authorization: token } };
  try {
    const response = await axios.put(baseUrl, note, config);
    toast.success('Note updated.');
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

export default {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
};
