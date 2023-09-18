import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2Q1MTYzZGU5NTZhNzI0YzdhYTEyNTI2OWI0ZGJkNiIsInN1YiI6IjY1MDZjMTYzM2NkMTJjMDEwY2QwNzQ0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xRlKnQiYG4DQbiRnHWWa91jf5IH52eQ8vYZFsNKP4rM';

export const getInfo = (query) => {
    return axios.get(query)
        .then(resp => resp.data)
        .catch(error => {
            throw error;
        });
};