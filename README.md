# stryker-ignorer-console
Use this ignorer plugin for use with @stryker-mutator to ignore console.* statements

stryker.conf.json example:
```
{
    "ignorers": ["console-standard"],
    "plugins": ["@stryker-mutator/*", "@stryker-ignorer/console-standard"]
}
```