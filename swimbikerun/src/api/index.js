import Axios from 'axios';

const api = Axios.create({
    headers : {'Access-Control-Allow-Origin': 
    'https://swimbikerunfrontend.herokuapp.com/'},
    //withCredentials: true,
    baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000',
    //baseURL: process.env.REACT_APP_BACKEND_URL
})

const createNewTip = payload => api.post('/new', payload);
const getAllTips = () => api.get('/tips');
const deleteTip = (id) => api.delete(`/tips/${id}`);
const addToFav = (id) => api.put(`/tips/${id}/liked`);


const apis = {
    createNewTip,
    getAllTips,
    deleteTip,
    addToFav
}

export default apis