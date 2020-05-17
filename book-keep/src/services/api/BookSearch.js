import axios from 'axios'

export default {
    getBook(name) {
        return axios.get('http://localhost:8081/api/v1/searchByName/' + name)
        .then(response =>{
            return response;
        })
    }
}