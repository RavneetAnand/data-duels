"use client";

import { Package2Icon } from "@/utils/Icons/Package2Icon";
import { PackageIcon } from "@/utils/Icons/PackageIcon";
import { UsersIcon } from "@/utils/Icons/UsersIcon";
import Link from "next/link";
import { useState } from "react";
import TeamsLayout, { Team } from "./TeamsLayout";

export enum Tab {
  TEAMS = "teams",
  DUEL = "duel",
}

const tabs = [
  { key: Tab.TEAMS, title: "Teams" },
  {
    key: Tab.DUEL,
    title: "Duels",
  },
];

const TabsLayout = ({ teams }: { teams: Team[] }) => {
  const [selectedTeams, setSelectedTeams] = useState<number[]>([]);
  /* const [tabSelected, setTabSelected] = useState<Tab>(Tab.TEAMS);

  const backgroundColour = "bg-blue-500"; */

  return (
    <div className="flex flex-col">
      {/*  <div className="hidden lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          {/* <div className="flex h-[60px] items-center border px-6">
            <Link className="flex items-center gap-2 text-white font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span>NFL</span>
            </Link>
          </div>

          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              {tabs.map((tab) => (
                <Link
                  key={tab.key}
                  className={`flex items-center gap-3 rounded-lg ${
                    tabSelected === tab.key && `${backgroundColour} text-gray-900`
                  } px-3 py-2 text-white font-semibold transition-all hover:text-gray-200`}
                  href={
                    tab.key === Tab.DUEL && selectedTeams.length === 2
                      ? `duels/${selectedTeams[0]}/${selectedTeams[1]}`
                      : "#"
                  }
                  onClick={() => setTabSelected(tab.key)}
                >
                  {tab.key === Tab.TEAMS ? <PackageIcon className="h-4 w-4" /> : <UsersIcon className="h-4 w-4" />}
                  {tab.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div> */}

      <TeamsLayout teams={teams} selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} />
    </div>
  );
};

export default TabsLayout;
