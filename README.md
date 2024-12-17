# stryker-ignorer-console
Use this ignorer plugin for use with @stryker-mutator to ignore console.* statements

## stryker.conf.json example:

To ignore standard console statements such as `console.log`, `console.warn`, `console.debug`, and `console.error`, use:
```
{
    "ignorers": ["console-standard"],
    "plugins": ["@stryker-mutator/*", "@stryker-ignorer/console-standard"]
}
```

To ignore all console statements, use:
```
{
    "ignorers": ["console-all"],
    "plugins": ["@stryker-mutator/*", "@stryker-ignorer/console-all"]
}
```