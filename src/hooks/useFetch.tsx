import { TeamStatsType } from "@/components/Duel/Duel";
import { Team } from "@/components/Teams";
import { useState, useEffect } from "react";

type FetchProps = {
  url: string;
  options?: RequestInit;
  params?: any;
};

export const useFetch = ({ url, options, params }: FetchProps) => {
  const [data, setData] = useState<Team[] | TeamStatsType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(url, {
      method: options?.method || "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, error };
};
