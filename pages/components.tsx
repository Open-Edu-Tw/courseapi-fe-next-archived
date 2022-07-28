import { useState } from "react";

import type { NextPage } from "next";
import { Button, SearchBar, SearchBarVariant } from "@/components";
import { PlayIcon } from "@/icons";
import { CourseAPILogo } from "@/icons";

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
    	<nav className="bg-white px-2 sm:px-4 py-5">
    		<div className="container flex flex-wrap justify-between items-center mx-auto">
    			<a href="https://courseapi.org" className="flex items-center"><CourseAPILogo /></a>
    			<SearchBar
		        variant={SearchBarVariant.Expanded}
		        content={content}
		        onChange={(e) => setContent(e.target.value)}
		        onSearchIconPressed={() => alert("Search icon was pressed")}
		      />
    		</div>
    	</nav>
    </div>
  );
};

export default ComponentsPage;
