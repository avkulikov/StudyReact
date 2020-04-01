import axios from 'axios'

export const API_KEY = 'AIzaSyBLZM1LxRIwYMGWcaWybhfCy9wLv5qyixM'

export default axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/'
})