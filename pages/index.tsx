import type { NextPage } from "next";
import { Button } from "@/components";
import { PlayIcon } from "@/icons";

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
      <h1 className="font-bold text-center">Hello Course API</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button icon={<PlayIcon />} size="medium" color="basic" label="觀看" />
        <br />
        <Button icon={<PlayIcon />} size="medium" color="accent" label="觀看" />
      </div>
    </div>
  );
};

export default Home;
