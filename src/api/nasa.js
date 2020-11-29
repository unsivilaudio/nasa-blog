import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eonet.sci.gsfc.nasa.gov/api/v3',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;
