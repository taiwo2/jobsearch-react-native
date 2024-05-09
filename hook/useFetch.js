import { useState, useEffect } from "react";
import axios from "axios";
// import {RAPIDAPI} from "@env"
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const Rapiskey= RAPIDAPI
  

const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': '962623b957msh634367a7546e18ep1c121ejsnf9aea984cdb9',
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  },
  params: {...query }
};

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };




  return {  data,isLoading,error,refetch};
};

export default useFetch;