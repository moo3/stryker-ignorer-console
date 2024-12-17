import { PluginKind, declareValuePlugin } from '@stryker-mutator/api/plugin';
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
export const strykerPlugins = [declareValuePlugin(PluginKind.Ignore, 'console-all', {
        /**
         * Determines whether a given AST path should be ignored during mutation testing.
         *
         * @param {object} path - The AST path object representing the current node being evaluated
         * @param {string} path.node.expression.type - The type of the expression
         * @param {string} path.node.expression.callee.type - The type of the callee
         * @param {string} path.node.expression.callee.object.name - The name of the object being called
         * @param {string} path.node.expression.callee.property.name - The name of the method being called
         * @returns {string|undefined} A string explaining why the mutation was ignored, or undefined if it should not be ignored
         */
        shouldIgnore(path) {
            // Define the conditions for which you want to ignore mutants
            if (path.isExpressionStatement() &&
                path.node.expression.type === 'CallExpression' &&
                path.node.expression.callee.type === 'MemberExpression' &&
                path.node.expression.callee.object.type === 'Identifier' &&
                path.node.expression.callee.object.name === 'console' &&
                path.node.expression.callee.property.type === 'Identifier' &&
                Object.keys(console).includes(path.node.expression.callee.property.name)) {
                // Return the ignore reason
                return "We're not interested in testing `console.*` statements.";
            }
            return undefined;
        }
    })];
//# sourceMappingURL=index.js.map