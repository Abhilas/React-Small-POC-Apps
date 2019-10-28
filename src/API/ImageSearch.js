import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b9b35660965bf90647e498de7d6768a32fc397e3fa053d6bf53afb672d794bd4'
    }
});

// Configuration for the Image search Api for 'Pics' folder.