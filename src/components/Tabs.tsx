"use client";

import Teams from "./Teams";
import { Package2Icon } from "@/utils/Icons/Package2Icon";
import { PackageIcon } from "@/utils/Icons/PackageIcon";
import { UsersIcon } from "@/utils/Icons/UsersIcon";
import Link from "next/link";
import { useState } from "react";
import Duel from "./Duel/Duel";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export enum Tab {
  TEAMS = "teams",
  DUEL = "duel",
}

const Tabs = () => {
  const [selectedTeams, setSelectedTeams] = useState<number[]>([]);
  const [tabSelected, setTabSelected] = useState<Tab>(Tab.TEAMS);

  const backgroundColour = "bg-blue-500";

  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid min-h-screen items-start w-full gap-0 lg:grid-cols-[280px_1fr]">
        <div className="hidden lg:block">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-[60px] items-center border px-6">
              <Link className="flex items-center gap-2 text-white font-semibold" href="#">
                <Package2Icon className="h-6 w-6" />
                <span>NFL</span>
              </Link>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid items-start px-4 text-sm font-medium">
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    tabSelected === Tab.TEAMS && `${backgroundColour} text-gray-900`
                  } px-3 py-2 text-white font-semibold transition-all hover:text-gray-200`}
                  href="#"
                  onClick={() => setTabSelected(Tab.TEAMS)}
                >
                  <PackageIcon className="h-4 w-4" />
                  Teams
                </Link>
                <Link
                  className={`flex items-center gap-3 rounded-lg ${
                    tabSelected === Tab.DUEL && `${backgroundColour} text-gray-900`
                  } px-3 py-2 text-white transition-all hover:text-gray-200`}
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
          {tabSelected === Tab.TEAMS ? (
            <Teams selectedTeams={selectedTeams} setSelectedTeams={setSelectedTeams} setTabSelected={setTabSelected} />
          ) : (
            <Duel teams={selectedTeams} />
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Tabs;
