import { teamsURL } from "@/utils/constants";
import ErrorMessage from "@/components/ErrorMessage";
import TabsLayout from "@/components/TabsLayout";

async function getTeamData() {
  const teamData = await fetch(teamsURL).then((res) => res.json());
  return teamData;
}

const Teams = async () => {
  const teamData = await getTeamData();

  if (!teamData) {
    return <ErrorMessage message="Please bear with us. We are still gathering data." />;
  }

  return <TabsLayout teams={teamData} />;
};

export default Teams;
