import axios from "axios";

const URL="https://rickandmortyapi.com/api/"
// GET request example
export const Fetchdata = async (pagenum) => {
    try {
      const result = await axios.get(URL+`character/?page=${pagenum}`);
      return result.data
     
    } catch (err) {
     
    }
  };