import { dataToEsm } from '@rollup/pluginutils';
import { parse } from '@iarna/toml';
import { promises } from 'fs';

export default () => {
  return {
    name: 'snowpack-plugin-toml',
    resolve: {
      input: ['.toml'],
      output: ['.js']
    },
    async load({filePath}) {
      let toml = parse(await promises.readFile(filePath, 'utf-8'));

      return {
        '.js': {
          code: dataToEsm(toml),
          map: { mappings: '' }
        }
      }
    }
  }
}
