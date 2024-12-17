import { PluginKind } from '@stryker-mutator/api/plugin';
/**
 * Stryker plugin to ignore standard console statements during mutation testing.
 * This plugin will prevent Stryker from creating mutants for the most commonly used console methods:
 * console.log, console.debug, console.warn, and console.error.
 *
 * Other console methods (like console.table, console.trace, etc.) will still be mutated.
 * If you want to ignore all console methods, use the 'all' plugin instead.
 *
 * @example
 * // In your stryker.conf.json:
 * {
 *   "ignorers": ["console-standard"],
 *   "plugins": ["@stryker-mutator/*", "@stryker-ignorer/console-standard"]
 * }
 */
export declare const strykerPlugins: import("@stryker-mutator/api/plugin").ValuePlugin<PluginKind.Ignore>[];
