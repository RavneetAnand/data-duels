import { TeamStatsType } from "./Duel";

type CardProps = {
  teamOnedata: TeamStatsType[];
  teamTwodata: TeamStatsType[];
  title: string;
};

const DuelCard = ({ teamOnedata, teamTwodata, title }: CardProps) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mr-4">
      <div className="card-body items-center">
        <h2 className="card-title text-white font-bold">{title}</h2>
        <div className="flex items-center w-full">
          {/* Team one */}
          <div className="flex items-center flex-col w-1/2">
            {teamOnedata.map((player: any) => (
              <div key={player.id} className="my-3">
                <p className="text-blue-300 font-bold">{player.name}</p>
                {player.playerDetails && (
                  <p className="text-blue-400">{player.playerDetails}</p>
                )}
                <div>
                  <p className="text-blue-500 font-semibold">Last 5 games:</p>
                  <p className="text-blue-600 italic">
                    {player.last5Games.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="bg-white h-16 w-px mx-4"></div> */}
          <div className="divider divider-horizontal" />

          {/* Team two */}
          <div className="flex items-center flex-col w-1/2">
            {teamTwodata.map((player: any) => (
              <div className="flex flex-col items-end my-3" key={player.id}>
                <p className="text-red-400 font-bold">{player.name}</p>
                {player.playerDetails && (
                  <p className="text-red-500">{player.playerDetails}</p>
                )}
                <div>
                  <p className="text-red-600 font-semibold">Last 5 games:</p>
                  <p className="text-red-700 italic">
                    {player.last5Games.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuelCard;
