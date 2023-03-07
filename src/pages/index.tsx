import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const { data, isLoading } = api.example.hello.useQuery({ text: "from tRPC" });

  // // const { data, isLoading } = trpc.useQuery(["hello", {text: "KJ" }]);

  // if (isLoading) return <div>Loading...</div>

  // if (data) return <div>{data.greeting}</div>
  

  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center">
      <div className="text-2xl text-center">Who was 16th U.S President?</div>
      <div className="p-2" />
      <div className="border rounded p-48 flex justify-between items-center max-w-4xl">
        <div className="p-8">George</div>
        <div className="p-8">Abe</div>
        <div className="p-8">Bush</div>
        <div className="p-8">Adams</div>
      </div>
    </div>
  );
};

export default Home;

