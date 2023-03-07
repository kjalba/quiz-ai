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
      <div className="border rounded p-10 min-h-1/2 max-w-4xl">
        <div className="grid grid-cols-2 grid-rows-2 h-full">
          <div className="flex items-start justify-start p-4 pt-0 pl-0">
            <div className="text-2xl">George Washington</div>
          </div>
          <div className="flex items-center justify-center p-4 pt-0 pl-8 pr-8">
            <div className="text-2xl">Abraham Lincoln</div>
          </div>
          <div className="flex items-start justify-start p-4 pt-8 pl-0">
            <div className="text-2xl">George H. W. Bush</div>
          </div>
          <div className="flex items-center justify-center p-4 pt-8 pl-8 pr-8">
            <div className="text-2xl">John Quincy Adams</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

