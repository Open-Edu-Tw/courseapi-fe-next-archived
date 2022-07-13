import type { NextPage } from "next";
import { tw } from 'twind'
import { DownloadIcon } from "../components/icons";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={tw`font-bold text-center`}>Hello Next.js</h1>
      <DownloadIcon />
    </div>
  );
};

export default Home;
