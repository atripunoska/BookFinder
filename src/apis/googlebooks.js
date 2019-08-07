
import axios from 'axios';

const KEY = 'youAPIKey';

export default axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    params : {
        key:KEY,
        maxResults: 15
    }
  });
