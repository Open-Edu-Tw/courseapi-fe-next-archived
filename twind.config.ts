import type { Configuration } from "twind";
import * as colors from "twind/colors";

const config: Configuration = {
  theme: {
    colors: {
      ...colors,
      "light-blue": colors.lightBlue,
    },
    borderRadius: {
      DEFAULT: "0.5rem",
    },
  },
};

export default config;
