import { strykerPlugins } from './index.js';

describe('@stryker-ignorer/console-all', () => {
  const plugin = strykerPlugins[0].value;

  describe('shouldIgnore', () => {
    it('should ignore all console statements', () => {
      const methods = Object.keys(console);

      methods.forEach(method => {
        const path = {
          isExpressionStatement: () => true,
          node: {
            expression: {
              type: 'CallExpression',
              callee: {
                type: 'MemberExpression',
                object: { type: 'Identifier', name: 'console' },
                property: { type: 'Identifier', name: method }
              }
            }
          }
        };

        expect(plugin.shouldIgnore(path)).toBeTruthy();
      });
    });

    it('should not ignore non-console statements', () => {
      const path = {
        isExpressionStatement: () => true,
        node: {
          expression: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'logger' },
              property: { type: 'Identifier', name: 'log' }
            }
          }
        }
      };

      expect(plugin.shouldIgnore(path)).toBeFalsy();
    });
  });
});
