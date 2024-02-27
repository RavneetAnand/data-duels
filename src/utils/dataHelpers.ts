import { Player, PlayerStats } from "@/components/Duel/Duel";

export const getPassingLeadersData = (data: any) => {
  return data.players.reduce((acc: any, player: Player) => {
    if (player.passingLine) {
      const id = player.id;

      const name = `${player.firstName} ${player.lastName}`;

      const playerDetails = `${player.passingLine} - ${player.touchdownsPerGame} TD/G - ${player.stats[0].passingYards} YDS/G`;

      const last5Games = player.stats.reduce(
        (statsArr: string[], stat: PlayerStats) => {
          if (stat.passingYards) {
            statsArr.push(`${stat.passingYards} YDS - ${stat.touchDowns} TD`);
          }
          return statsArr;
        },
        []
      );

      acc.push({ id, name, playerDetails, last5Games });
    }
    return acc;
  }, []);
};

export const getRushingLeadersData = (data: any) => {
  return data.players.reduce((acc: any, player: Player) => {
    if (player.rushingLine) {
      const id = player.id;

      const name = `${player.firstName} ${player.lastName}`;

      const playerDetails = `${player.rushingLine} - ${player.rushingAttemptsPerGame} TD/G - ${player.rushingYardsPerGame} YDS/G`;

      const last5Games = player.stats.reduce(
        (statsArr: string[], stat: PlayerStats) => {
          if (stat.rushingYards) {
            statsArr.push(`${stat.rushingYards} YDS - ${stat.attempts} Att`);
          }
          return statsArr;
        },
        []
      );

      acc.push({ id, name, playerDetails, last5Games });
    }
    return acc;
  }, []);
};

export const getReceivingLeadersData = (data: any) => {
  return data.players.reduce((acc: any, player: Player) => {
    if (player.receivingLine) {
      const id = player.id;

      const name = `${player.firstName} ${player.lastName}`;

      const playerDetails = `${player.receivingLine} - ${player.receptionsPerGame} REC/G - ${player.receivingYardsPerGame} YDS/G`;

      const last5Games = player.stats.reduce(
        (statsArr: string[], stat: PlayerStats) => {
          if (stat.receivingYards !== undefined) {
            statsArr.push(
              `${stat.receivingYards} YDS - ${stat.receptions} REC`
            );
          }
          return statsArr;
        },
        []
      );

      acc.push({ id, name, playerDetails, last5Games });
    }
    return acc;
  }, []);
};

export const getTouchdownLeadersData = (data: any) => {
  return data.players.reduce((acc: any, player: Player) => {
    if (player.odds !== undefined) {
      const id = player.id;

      const name = `${player.firstName} ${player.lastName}`;

      const last5Games = player.stats.reduce(
        (statsArr: string[], stat: PlayerStats) => {
          if (stat.touchDowns !== undefined) {
            statsArr.push(`${stat.touchDowns} TD`);
          }
          return statsArr;
        },
        []
      );

      acc.push({ id, name, last5Games });
    }
    return acc;
  }, []);
};
