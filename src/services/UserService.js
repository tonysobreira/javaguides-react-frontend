import axios from 'axios'

//const USERS_REST_API_URL = 'http://localhost:8080/api/users';
const USERS_REST_API_URL = 'https://javaguides-springboot-backend.herokuapp.com/api/users';

class UserService {

    getUsers(){
        return axios.get(USERS_REST_API_URL);
    }

}

export default new UserService();