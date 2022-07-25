import { useState } from "react";

import type { NextPage } from "next";
import { Button, SearchBar, SearchBarVariant } from "@/components";
import { PlayIcon } from "@/icons";

const ComponentsPage: NextPage = () => {
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

  const [content, setContent] = useState("");

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
        &nbsp;
        <Button icon={<PlayIcon />} size="medium" color="accent" label="觀看" />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar
          variant={SearchBarVariant.Collapsed}
          onSearchIconPressed={() => {
            alert("Search icon was pressed");
          }}
        />
        &nbsp;
        <SearchBar
          variant={SearchBarVariant.Expanded}
          content={content}
          onChange={(e) => setContent(e.target.value)}
          onSearchIconPressed={() => alert("Search icon was pressed")}
        />
      </div>
    </div>
  );
};

export default ComponentsPage;
