"use client";

import Teams from "./Teams";
import { Package2Icon } from "@/utils/Icons/Package2Icon";
import { PackageIcon } from "@/utils/Icons/PackageIcon";
import { UsersIcon } from "@/utils/Icons/UsersIcon";
import Link from "next/link";
import { useState } from "react";
import Duel from "./Duel/Duel";

export enum Tab {
  TEAMS = "teams",
  DUEL = "duel",
}

const Tabs = () => {
  const [selectedTeams, setSelectedTeams] = useState<number[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.TEAMS);

  const backgroundColour = "bg-gray-100";

  return (
    <div className="grid min-h-screen items-start w-full gap-0 lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">NFL</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  tabSelected === Tab.TEAMS && backgroundColour
                } px-3 py-2 text-gray-900 transition-all hover:text-gray-900`}
                href="#"
                onClick={() => setTabSelected(Tab.TEAMS)}
              >
                <PackageIcon className="h-4 w-4" />
                Teams
              </Link>
              <Link
                className={`flex items-center gap-3 rounded-lg ${
                  tabSelected === Tab.DUEL && backgroundColour
                } px-3 py-2 text-gray-900 transition-all hover:text-gray-900`}
                href="#"
                onClick={() => setTabSelected(Tab.DUEL)}
              >
                <UsersIcon className="h-4 w-4" />
                Duel
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[30px] items-center gap-4 border-b bg-gray-100/40 px-6"></header>
        {tabSelected === Tab.TEAMS ? (
          <Teams
            selectedTeams={selectedTeams}
            setSelectedTeams={setSelectedTeams}
            setTabSelected={setTabSelected}
          />
        ) : (
          <Duel teams={selectedTeams} />
        )}
      </div>
    </div>
  );
};

export default Tabs;
