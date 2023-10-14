import axios from "axios";
import { useEffect, useState } from "react";
import { options } from "../request";

const useFetchData = (url, number) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async (url, number) => {
    try {
      setLoading(true);
      const response = await axios.request(url, {
        ...options,
        params: { limit: number },
      });
      setData(response.data);
      setLoading(false);
    } catch (err) {
      console.log("error fetching data", err);
    }
  };
  useEffect(() => {
    fetchData(url, number);
  }, [url, number]);
  return { data, loading };
};
export default useFetchData;
