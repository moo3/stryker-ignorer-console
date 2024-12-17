import { PluginKind } from '@stryker-mutator/api/plugin';
/**
 * Stryker plugin to ignore all console statements during mutation testing.
 * This plugin will prevent Stryker from creating mutants for any console method calls
 * (e.g., console.log, console.warn, console.error, console.debug, etc.).
 *
 * @example
 * // In your stryker.conf.json:
 * {
 *   "ignorers": ["console-all"],
 *   "plugins": ["@stryker-mutator/*", "@stryker-ignorer/console-all"]
 * }
 */
export declare const strykerPlugins: import("@stryker-mutator/api/plugin").ValuePlugin<PluginKind.Ignore>[];
