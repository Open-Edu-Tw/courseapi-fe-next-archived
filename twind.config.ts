import type { Configuration } from "twind";
import * as colors from "twind/colors";

const config: Configuration = {
  theme: {
    colors,
    borderRadius: {
      DEFAULT: "0.5rem",
    },
  },
  hash: true,
};

export default config;
