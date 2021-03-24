import { dataToEsm } from "@rollup/pluginutils";
import * as YAML from "js-yaml";
import { promises } from "fs";

export default () => {
  return {
    name: "snowpack-plugin-yaml",
    resolve: {
      input: [".yaml"],
      output: [".js"],
    },
    async load({ filePath }) {
      const yaml = YAML.load(await promises.readFile(filePath, "utf-8"));

      return {
        ".js": {
          code: dataToEsm(yaml),
          map: { mappings: "" },
        },
      };
    },
  };
};
