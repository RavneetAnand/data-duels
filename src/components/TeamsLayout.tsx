import Image from "next/image";
import Link from "next/link";

export type Team = {
  id: number;
  name: string;
  teamSpread: string;
  pointsScoredPerGame: number;
  netPassingYardsPerGame: number;
  rushingYardsPerGame: number;
};

type Props = {
  teams: Team[];
  selectedTeams: number[];
  setSelectedTeams: (teams: number[]) => void;
};

const TeamsLayout = ({ teams, selectedTeams, setSelectedTeams }: Props) => {
  const teamSelected = (id: number) => {
    // Can select only two teams
    if (selectedTeams.length === 2) {
      return;
    }
    setSelectedTeams([...selectedTeams, id]);
  };

  const canCompare = selectedTeams.length === 2;

  const compareTeams = () => {};

  return (
    <div className="flex flex-row p-4 justify-between">
      <div className="grid gap-4 md:grid-cols-3 mr-4">
        {teams.map(({ id, name, teamSpread }) => (
          <div key={id} className="card w-60 h-80 glass">
            <figure className="m-2">
              <Image src={`/assets/${id}.jpg`} alt={name} width={384} height={150} />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title">{name}</h2>
              <p>{teamSpread}</p>
              <div className="card-actions justify-end">
                {selectedTeams.includes(id) ? (
                  <button className="btn" disabled={true}>
                    Selected
                  </button>
                ) : (
                  <button
                    data-testid={`select-team-${id}`}
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
      <div className="flex ml-2 z-10">
        <button
          className="btn btn-secondary w-fit mr-2"
          disabled={selectedTeams.length === 0}
          onClick={() => setSelectedTeams([])}
        >
          Reset
        </button>
        <Link href={`duels/${selectedTeams[0]}/${selectedTeams[1]}`}>
          <button className="btn btn-accent w-fit" disabled={!canCompare} onClick={compareTeams}>
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
        </Link>
      </div>
    </div>
  );
};

export default TeamsLayout;
