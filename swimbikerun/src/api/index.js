import Axios from 'axios';

const api = Axios.create({
    //withCredentials: true,
    baseURL: 'http://localhost:4000',
    //baseURL: process.env.REACT_APP_BACKEND_URL
})

const createNewTip = payload => api.post('/new', payload);
const getAllTips = () => api.get('/tips');

const apis = {
    createNewTip,
    getAllTips
}

export default apis