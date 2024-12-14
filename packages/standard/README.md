# @stryker-ignorer/console-standard

A Stryker plugin to ignore standard console statements (log, warn, debug, error) during mutation testing.

## Installation

```bash
npm install --save-dev @stryker-ignorer/console-standard
```

## Usage

Add the plugin to your Stryker configuration:

```json
{
  "plugins": [
    "@stryker-mutator/javascript",
    "@stryker-ignorer/console-standard"
  ]
}
```

This will ignore mutations on standard console statements (console.log, console.warn, console.debug, console.error) during mutation testing.

## License

MIT
