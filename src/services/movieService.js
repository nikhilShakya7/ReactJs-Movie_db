import axios from "axios";

const API="https://68675264e3fefb261ede49f2.mockapi.io/Movies"
export const getMovies=()=>axios.get(API);
export const addMovie=(movie)=>axios.post(API, movie);
export const updateMovie=(id, movie)=>axios.put(`${API}/${id}`,movie);
export const deleteMovie=(id)=>axios.delete(`${API}/${id}`);