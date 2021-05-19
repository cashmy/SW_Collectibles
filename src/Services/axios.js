import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:44394/api/',
    headers: {
        'Content-type': 'application/json',
    }
});
