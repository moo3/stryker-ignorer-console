import { ignoreConsoleStandard } from './index.js';

describe('@stryker-ignorer/console-standard', () => {
  const plugin = ignoreConsoleStandard[0].value;
  
  describe('shouldIgnore', () => {
    it('should ignore console.log statements', () => {
      const path = {
        isExpressionStatement: () => true,
        node: {
          expression: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'console' },
              property: { type: 'Identifier', name: 'log' }
            }
          }
        }
      };

      expect(plugin.shouldIgnore(path)).toBeTruthy();
    });

    it('should ignore console.error statements', () => {
      const path = {
        isExpressionStatement: () => true,
        node: {
          expression: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'console' },
              property: { type: 'Identifier', name: 'error' }
            }
          }
        }
      };

      expect(plugin.shouldIgnore(path)).toBeTruthy();
    });

    it('should not ignore console.table statements', () => {
      const path = {
        isExpressionStatement: () => true,
        node: {
          expression: {
            type: 'CallExpression',
            callee: {
              type: 'MemberExpression',
              object: { type: 'Identifier', name: 'console' },
              property: { type: 'Identifier', name: 'table' }
            }
          }
        }
      };

      expect(plugin.shouldIgnore(path)).toBeFalsy();
    });
  });
});
