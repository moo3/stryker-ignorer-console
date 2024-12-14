# @stryker-ignorer/console-all

A Stryker plugin to ignore all console statements during mutation testing.

## Installation

```bash
npm install --save-dev @stryker-ignorer/console-all
```

## Usage

Add the plugin to your Stryker configuration:

```json
{
  "plugins": [
    "@stryker-mutator/javascript",
    "@stryker-ignorer/console-all"
  ]
}
```

This will ignore mutations on all console statements during mutation testing.

## License

MIT