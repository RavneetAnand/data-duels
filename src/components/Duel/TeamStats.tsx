import { Team } from "../Teams";

const TeamStats = ({ teamData }: { teamData: Team }) => {
  return (
    <div className="grid flex-grow card bg-base-300 rounded-box place-items-center">
      {/* Team One Table */}
      <h2 className="text-white font-bold text-center text-3xl m-2 italic">
        {`${teamData.name}(${teamData.teamSpread})`}
      </h2>
      <div className="stats stats-vertical shadow m-2">
        <div className="stat">
          <div className="stat-title">Points Scored Per Game</div>
          <div className="stat-value">{teamData.pointsScoredPerGame}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Net Passing Yards Per Game</div>
          <div className="stat-value">{teamData.netPassingYardsPerGame}</div>
        </div>

        <div className="stat">
          <div className="stat-title">Rushing Yards Per Game</div>
          <div className="stat-value">{teamData.rushingYardsPerGame}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamStats;
