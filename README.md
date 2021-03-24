# snowpack-plugin-yaml

A Snowpack plugin to convert YAML files to ESM.

First, add snowpack-plugin-yaml to your `snowpack.config.js`:

```js
  plugins: [
    ...
    "snowpack-plugin-yaml",
  ],
```

Then, import your YAML file like so:

```js
import test from "./content/test.yaml";
```

This is a fork of [snowpack-plugin-toml](https://github.com/amdg/snowpack-plugin-toml) by amdg.
