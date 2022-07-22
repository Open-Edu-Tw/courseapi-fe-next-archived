import type { NextPage } from "next";
import { tw } from 'twind'
import { Button } from "@/components";
import { DownloadIcon } from "@/icons";

const Home: NextPage = () => {

//  const [currentStyle, setCurrentStyle] = useState<HeaderStyle>(HeaderStyle.Mobile);
//  const onSearchIconPressed = useCallback(
//      () => setCurrentStyle(
//        currentStyle === HeaderStyle.Mobile
//         ? HeaderStyle.MobileWithSearchBar
//           : HeaderStyle.Mobile
//      ),
//       [currentStyle, setCurrentStyle],
//   );
//   <Header
//   style={HeaderStyle.Mobile}
//   onSearchIconPressed={onSearchIconPressed}
//   onSearch={undefined}
//   selected={undefined}
//   onToggleMenu={() => {
//     alert("toggle menu");
//     }} />

  return (
    <div>
      <h1 className={tw`font-bold text-center`}>Hello Next.js</h1>
      <Button size="medium" color="accent" label="登入" />
      <br />
      <Button icon={<DownloadIcon />} size="medium" color="accent" label="下載" />
    </div>
  );
};

export default Home;
