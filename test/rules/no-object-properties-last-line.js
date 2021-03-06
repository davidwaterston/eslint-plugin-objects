'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest('./lib/rules/no-object-properties-last-line', {
    valid: [
        {code: 'var a = {};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {\n    b: 1,\n    c: 2\n};'},
        {code: 'var a = {b: 1,\n         c: 2\n};'}
    ],
    invalid: [
        {
            code: 'var a = {b: 1, c: 2};',
            errors: [
                {message: 'object property on same line as closing brace'}
            ]
        },
        {
            code: 'var a = {\n    b: 1,\n    c: 2,\n    d: 3};',
            errors: [
                {message: 'object property on same line as closing brace'}
            ]
        },
        {
            code: 'var a = {\n    b:1,\n    c:\n    2};',
            errors: [
                {message: 'object property on same line as closing brace'}
            ]
        }
    ]
});
