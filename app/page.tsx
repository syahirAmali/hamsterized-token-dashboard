import Image from "next/image";
import { UserWallet } from "@/components/dashboard/UserWallet";
import { TokenSupply } from "@/components/dashboard/TokenSupply";
import { TokenLore } from "@/components/dashboard/TokenLore";
import { TokenManagement } from "@/components/dashboard/TokenManagement";
import { Leaderboard } from "@/components/dashboard/Leaderboard";
import { CohortProjects } from "@/components/dashboard/CohortProjects";

export interface Token {
  name: string;
  symbol: string;
  price: number;
  priceChange: number;
  volume: string;
  marketCap: string,
  totalSupply: string,
  contractAddress: string,
  description: string,
}

export default function Home() {
  const tokens: Token[] = [
    {
      name: "RGCVII",
      symbol: "RGCVII",
      price: 1234.56,
      priceChange: 5.67,
      volume: "45.6M",
      marketCap: "789.1M",
      totalSupply: "1,000,000,000",
      contractAddress: "0x68f2...abc",
      description: "In a land",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 bg-gradient-to-b from-[#1A202C] to-[#566A92]">
        <div className="container mx-auto p-4 sm:p-6 flex flex-col gap-4 h-full">
          <h1 className="text-white text-5xl font-serif">RaidGuild Cohort Token Dashboard</h1>
          <UserWallet tokens={tokens} />
          <div className="grid grid-cols-3 gap-4 auto-rows-[240px]">
            <TokenSupply tokens={tokens} />
            <TokenLore tokens={tokens} />
            <TokenManagement />
            <Leaderboard />
          </div>
          <CohortProjects />

        </div>
      </main>

      <footer className="py-4 flex justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://app.charmverse.io/raidguild-cohort-season-7/hamsterized-token-dashboard-0771957381100139"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Project Details →
        </a>
      </footer>
    </div>
  );
}
