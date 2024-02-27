"use client";

import { useFetch } from "@/hooks/useFetch";
import { teamsURL } from "@/utils/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab } from "./Tabs";
import ErrorMessage from "./ErrorMessage";

export type Team = {
  id: number;
  name: string;
  teamSpread: string;
  pointsScoredPerGame: number;
  netPassingYardsPerGame: number;
  rushingYardsPerGame: number;
};

type TeamsProps = {
  selectedTeams: number[];
  setSelectedTeams: (teams: number[]) => void;
  setTabSelected: (tab: Tab) => void;
};

const Teams = ({
  selectedTeams,
  setSelectedTeams,
  setTabSelected,
}: TeamsProps) => {
  const [teams, setTeams] = useState<Team[]>([]);

  // Fetch teams from API and set them to state
  const { data, isLoading, error } = useFetch({ url: teamsURL });

  useEffect(() => {
    if (data) {
      setTeams(data);
    }
  }, [data]);

  if (isLoading) {
    return <ErrorMessage message="Loading..." />;
  }

  if (error) {
    return <ErrorMessage message={`Error: ${error.message}`} />;
  }

  if (!data) {
    return (
      <ErrorMessage message="Please bear with us. We are still gathering data." />
    );
  }

  const teamSelected = (id: number) => {
    // Can select only two teams
    if (selectedTeams.length === 2) {
      return;
    }
    setSelectedTeams([...selectedTeams, id]);
  };

  const canCompare = selectedTeams.length === 2;

  return (
    <div className="flex flex-row p-4 justify-between">
      <div className="grid gap-4 md:grid-cols-3 mr-4">
        {teams.map(({ id, name, teamSpread }) => (
          <div key={id} className="card w-60 h-80 glass">
            <figure className="m-2">
              <Image
                src={`/assets/${id}.jpg`}
                alt={name}
                width={384}
                height={150}
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">{name}</h2>
              <p>{teamSpread}</p>
              <div className="card-actions justify-end">
                {selectedTeams.includes(id) ? (
                  <button className="btn text-gray-800" disabled={true}>
                    Selected
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={() => teamSelected(id)}
                  >
                    Select
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="btn btn-accent w-fit z-10"
        disabled={!canCompare}
        onClick={() => setTabSelected(Tab.DUEL)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Compare
      </button>
    </div>
  );
};

export default Teams;
