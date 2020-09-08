import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID qbOlYjagX-_QBb7xNnOw6Xh-J0G742AvhHYjXsswlaQ',
  },
});
