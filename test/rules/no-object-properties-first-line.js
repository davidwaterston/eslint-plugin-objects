'use strict';

var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});  
var rule = require('../../lib/rules/no-object-properties-first-line');

eslintTester.run('no-object-properties-first-line', rule, {
    valid: [
        {code: 'var a = {};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {\n    b: 1,\n    c: 2};'},
        {code: 'var a = {\n    b: 1,\n    c: 2\n};'}
    ],
    invalid: [
        {
            code: 'var a = {b: 1, c: 2};',
            errors: [
                {message: 'object property on same line as opening brace'}
            ]
        },
        {
            code: 'var a = {b: 1,\n    c: 2,\n    d: 3\n};',
            errors: [
                {message: 'object property on same line as opening brace'}
            ]
        },
        {
            code: 'var a = {b:\n    1,\n    c: 2};',
            errors: [
                {message: 'object property on same line as opening brace'}
            ]
        }
    ]
});
