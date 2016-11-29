'use strict';

var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});
var rule = require('../../lib/rules/no-object-properties-last-line');  

eslintTester.run('no-object-properties-last-line', rule, {
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
