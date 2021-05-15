import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async ({ url, method = "GET", body = null }) => {
      try {
        const response = await fetch(url, {
          method: method,
          body: body !== null ? JSON.stringify(body) : null,
        });
        const responseData = await response.json();
        setData(responseData);
        setloading(false);
      } catch (err) {
        setError(err);
        setloading(false);
      }
    };
    fetchData();
  });
  return [data, loading, error];
};

export default useFetch;
