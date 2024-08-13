import { playersURL } from "@/utils/constants";
import ErrorMessage from "@/components/ErrorMessage";
import DuelLayout, { TeamStatsType } from "@/components/Duel/DuelLayout";

async function getPlayersData(teams: number[]) {
  const data = await fetch(playersURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ teams }),
    cache: "no-cache",
  }).then((res) => res.json());

  return data;
}

const Duels = async ({ params }: { params: { slug: string[] } }) => {
  const teams = params.slug.map((team) => parseInt(team, 10));
  const data = await getPlayersData(teams);

  if (!data) {
    return <ErrorMessage message="Please bear with us. We are still gathering data." />;
  }

  const [teamOneData, teamTwoData] = data as [TeamStatsType, TeamStatsType];

  if (!teamOneData || !teamTwoData) {
    return (
      <ErrorMessage message="We are unable to fetch the data at this time. Make sure you have selected two teams." />
    );
  }

  return (
    <>
      <DuelLayout teamOneData={teamOneData} teamTwoData={teamTwoData} />
    </>
  );
};

export default Duels;
