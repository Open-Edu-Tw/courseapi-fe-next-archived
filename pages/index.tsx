import type { NextPage } from "next";
import { tw } from 'twind'
import { Button } from "@/components";
import { DownloadIcon } from "@/icons";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={tw`font-bold text-center`}>Hello Next.js</h1>
      <DownloadIcon />
      <Button size="medium" color="accent" label="登入" />
    </div>
  );
};

export default Home;
