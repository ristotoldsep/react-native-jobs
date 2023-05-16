import { useState, useEffect } from 'react'
import axios from 'axios'
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
        //   'X-RapidAPI-Key': rapidApiKey || 'ed97893857mshc06ddd2c3a44ddap1d6cbcjsn99b8d791e3ea',
          'X-RapidAPI-Key': '46647a9409msh8225511b05d57a0p1cd9a3jsn63b65cd42034',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
        },
      };

      const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);

            setIsLoading(false);

        } catch (error) {
            setError(error);
            alert('Oops, there is an error.');
        } finally {
            setIsLoading(false);
        }   
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return { data, isLoading, error, refetch }
}

export default useFetch;