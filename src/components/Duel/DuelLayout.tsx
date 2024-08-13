import React from "react";
import {
  getPassingLeadersData,
  getReceivingLeadersData,
  getRushingLeadersData,
  getTouchdownLeadersData,
} from "@/utils/dataHelpers";
import DuelCard from "./Card";
import TeamStats from "./TeamStats";
import Link from "next/link";

export type PlayerStats = {
  id: number;
  player: number;
  game: number;
  passingYards?: number;
  touchDowns?: number;
  rushingYards?: number;
  attempts?: number;
  receivingYards?: number;
  receptions?: number;
};

export type Player = {
  id: number;
  firstName: string;
  lastName: string;
  team: number;
  passingLine?: string;
  rushingLine?: string;
  receivingLine?: string;
  passingYardsPerGame?: number;
  touchdownsPerGame?: number;
  rushingYardsPerGame?: number;
  rushingAttemptsPerGame?: number;
  receivingYardsPerGame?: number;
  receptionsPerGame?: number;
  odds?: number;
  rushingTouchdowns?: number;
  receivingTouchdowns?: number;
  stats: PlayerStats[];
};

export type TeamStatsType = {
  id: number;
  name: string;
  teamSpread: string;
  pointsScoredPerGame: number;
  netPassingYardsPerGame: number;
  rushingYardsPerGame: number;
  players: Player[];
};

type DuelProps = { teamOneData: TeamStatsType; teamTwoData: TeamStatsType };

const DuelLayout: React.FC<DuelProps> = ({ teamOneData, teamTwoData }: DuelProps) => {
  const renderPassingLeaders = () => {
    const teamOnePassingLeaders = getPassingLeadersData(teamOneData);
    const teamTwoPassingLeaders = getPassingLeadersData(teamTwoData);

    return <DuelCard teamOnedata={teamOnePassingLeaders} teamTwodata={teamTwoPassingLeaders} title="Passing Leaders" />;
  };

  const renderRushingLeaders = () => {
    const teamOneRushingLeaders = getRushingLeadersData(teamOneData);
    const teamTwoRushingLeaders = getRushingLeadersData(teamTwoData);

    return <DuelCard teamOnedata={teamOneRushingLeaders} teamTwodata={teamTwoRushingLeaders} title="Rushing Leaders" />;
  };

  const renderReceivingLeaders = () => {
    const teamOneReceivingLeaders = getReceivingLeadersData(teamOneData);
    const teamTwoReceivingLeaders = getReceivingLeadersData(teamTwoData);

    return (
      <DuelCard teamOnedata={teamOneReceivingLeaders} teamTwodata={teamTwoReceivingLeaders} title="Receiving Leaders" />
    );
  };

  const renderTouchdownLeaders = () => {
    const teamOneTouchdownLeaders = getTouchdownLeadersData(teamOneData);
    const teamTwoTouchdownLeaders = getTouchdownLeadersData(teamTwoData);

    return (
      <DuelCard teamOnedata={teamOneTouchdownLeaders} teamTwodata={teamTwoTouchdownLeaders} title="Touchdown Leaders" />
    );
  };

  return (
    <div className="flex flex-row p-4 justify-between">
      <div className="flex w-full flex-col">
        <div className="flex flex-row mr-4">
          <TeamStats teamData={teamOneData} />
          <div className="divider divider-horizontal font-bold italic text-3xl text-red-800">v/s</div>
          <TeamStats teamData={teamTwoData} />
        </div>
        <div className="divider" />
        {renderPassingLeaders()}
        <div className="divider" />
        {renderRushingLeaders()}
        <div className="divider" />
        {renderReceivingLeaders()}
        <div className="divider" />
        {renderTouchdownLeaders()}
      </div>

      <div className="flex ml-2 z-10">
        <Link href={`/`}>
          <button className="btn btn-secondary w-fit mr-2">{"Teams"}</button>
        </Link>
      </div>
    </div>
  );
};

export default DuelLayout;
