import axios from 'axios'

export default axios.create({
    baseURL: 'https://study-react-quiz.firebaseio.com/'
})