import { useQuery } from "@tanstack/react-query";

type FetchProps = {
  url: string;
  options?: RequestInit;
  params?: any;
};

export const useFetch = ({ url, options, params }: FetchProps) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [url, options, params],
    queryFn: ({ queryKey }) =>
      fetch(url, {
        method: options?.method || "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      }).then((res) => res.json()),
  });

  return { data, isLoading, error };
};
