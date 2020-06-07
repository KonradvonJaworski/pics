import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 256bXSgW2fYeGZFXZM98FBSbMeCMV7r9_sL_crL3tDo',
  },
});
