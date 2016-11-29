'use strict';

var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});  
var rule = require('../../lib/rules/no-object-properties-one-line');

eslintTester.run('no-object-properties-one-line', rule, {
    valid: [
        {code: 'var a = {};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {b: 1,\n         c: 2};'},
        {code: 'var a = {\n    b: 1,\n    c: 2};'},
        {code: 'var a = {\n    b: 1,\n    c: 2\n};'},
        {code: 'var a = {a: 1, b: 2}', options: [{properties: 2}]}
    ],
    invalid: [
        {
            code: 'var a = {b: 1, c: 2};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {\n    b: 1, c: 2,\n    d: 3\n};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {a: 1, b: 2, c: 3, d: 4}',
            args: [2, {properties: 2}],
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        }
    ]
});
