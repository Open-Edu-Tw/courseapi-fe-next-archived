import type { NextPage } from "next";
import { tw } from 'twind'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={tw`font-bold text-center`}>Hello Next.js</h1>
    </div>
  );
};

export default Home;
