import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/notes';

const getNotes = async (token) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.get(baseUrl, config);
  return response.data;
};

const addNote = async (token, note) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.post(baseUrl, note, config);
  return response.data;
};

const deleteNote = async (token, id) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

const updateNote = async (token, note) => {
  const config = { headers: { Authorization: token } };
  const response = await axios.put(baseUrl, note, config);
  return response.data;
};

export default {
  getNotes,
  addNote,
  deleteNote,
  updateNote,
};
