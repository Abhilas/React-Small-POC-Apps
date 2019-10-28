import Axios from 'axios';

const KEY = 'AIzaSyA0Q0yk-fzqSMsMp9em1KCT7dganTAQJUM'; // Used for authenticating the request.

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

// Configuration for the Video search Api for 'YoututbeVideos' folder.