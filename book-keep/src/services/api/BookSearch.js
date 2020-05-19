import axios from 'axios'

export default {
    getBook(name) {
        return axios.get('http://localhost:8082/api/v1/searchByName/' + name)
        .then(response =>{
            return response;
        })
    },

    getAllBook(){
        return axios.get('http://localhost:8082/api/v1/allBooks').then(response =>{
            return response;
        })
    }


}