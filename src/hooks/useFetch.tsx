import { useState, useEffect } from "react";

type FetchProps = {
  url: string;
  options?: RequestInit;
  params?: any;
};

export const useFetch = ({ url, options, params }: FetchProps) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      fetch(url, {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      })
        .then((res) => res.json())
        .then((data) => setData(data));

      setIsLoading(false);
    } catch (e) {
      setError(e as Error);
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, error };
};
