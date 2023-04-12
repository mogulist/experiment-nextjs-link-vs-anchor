import Link from "next/link";
import OutSideLinks from "@/components/OutSideLinks";
import GlobalCounter from "./GlobalCounter";
import InsideLinks from "@/components/InsideLinks";

const GlobalStateUser = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <h1 className="text-4xl">Global State User</h1>
      <GlobalCounter />
      <div>
        <OutSideLinks />
        <InsideLinks href="/local" />
        <InsideLinks href="http://localhost:3000/local" />
      </div>
    </main>
  );
};

export default GlobalStateUser;
