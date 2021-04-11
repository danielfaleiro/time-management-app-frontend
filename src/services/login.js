import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3001/api/login';

const login = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    return response.data;
  } catch (e) {
    toast.error(e.response.data.error);
    return null;
  }
};

export default { login };
