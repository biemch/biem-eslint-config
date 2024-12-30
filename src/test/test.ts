import { join } from 'node:path';

import test from 'ava';
import {
	ESLint,
	Linter,
} from 'eslint';

const hasRule = (errors: ESLint.LintResult, ruleId: string) => {
	return errors.messages.some((error: Linter.LintMessage) => error.ruleId === ruleId);
};

const hasNotRule = (errors: ESLint.LintResult, ruleId: string) => {
	return errors.messages.some((error: Linter.LintMessage) => error.ruleId !== ruleId);
};

async function lintText(text: string) {
	const eslint = new ESLint({ overrideConfigFile: join(process.cwd(), 'dist/index.js') });

	const results = await eslint.lintText(text);

	return results[0];
}

test('should enforce object curly spacing', async (t) => {
	const code = `
    const one = {two: 1};
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, 'object-curly-spacing'));
});

test('should enforce module-bindings-newline/import', async (t) => {
	const code = `
    import { one, two, three, four, five, six, seven, eight, nine, ten } from 'some-module';
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, 'module-bindings-newline/import'));
});

test('should enforce simple-import-sort/imports', async (t) => {
	const code = `
    import { z } from 'z';
    import { a } from 'a';
    import { b } from 'b';
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, 'simple-import-sort/imports'));
});

test('should enforce unused-imports/no-unused-imports', async (t) => {
	const code = `
    import { unused } from 'module';
    console.log('nothing');
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, 'unused-imports/no-unused-imports'));
});

test('should enforce @stylistic/indent', async (t) => {
	const code = `
    function test(){
      return  "test"  ;
    }
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, '@stylistic/indent'));
});

test('should enforce @typescript-eslint/no-explicit-any', async (t) => {
	const code = `
    interface Test {
      prop: any;
    }
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, '@typescript-eslint/no-explicit-any'));
});

test('should enforce react/no-unknown-property', async (t) => {
	const code = `
    function Component() {
      return <div class="test" />;
    }
  `;

	const errors = await lintText(code);
	t.true(hasRule(errors, 'react/no-unknown-property'));
});

test('should not enforce object curly spacing', async (t) => {
	const code = `
    const one = { two: 1 };
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, 'object-curly-spacing'));
});

test('should not enforce module-bindings-newline/import', async (t) => {
	const code = `
    import {
      one,
      two,
      three,
    } from 'some-module';
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, 'module-bindings-newline/import'));
});

test('should not enforce simple-import-sort/imports', async (t) => {
	const code = `
    import { a } from 'a';
    import { b } from 'b';
    import { z } from 'z';
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, 'simple-import-sort/imports'));
});

test('should not enforce unused-imports/no-unused-imports', async (t) => {
	const code = `
    import { unused } from 'module';
    console.log(unused);
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, 'unused-imports/no-unused-imports'));
});

test('should not enforce @stylistic/indent', async (t) => {
	const code = `
    function test(){
      return "test";
    }
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, '@stylistic/indent'));
});

test('should not enforce @typescript-eslint/no-explicit-any', async (t) => {
	const code = `
    interface Test {
      prop: string;
    }
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, '@typescript-eslint/no-explicit-any'));
});

test('should not enforce react/no-unknown-property', async (t) => {
	const code = `
    function Component() {
      return <div className="test" />;
    }
  `;

	const errors = await lintText(code);
	t.true(hasNotRule(errors, 'react/no-unknown-property'));
});
