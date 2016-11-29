'use strict';

var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});  
var rule = require('../../lib/rules/no-object-properties-one-line');

eslintTester.run('no-object-properties-one-line', rule, {
    valid: [
        {code: 'var a = {};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {b: 1,\n         c: 2,\n         d};'},
        {code: 'var a = {\n    b: 1,\n    c: 2,\n    d};'},
        {code: 'var a = {\n    b: 1,\n    c: 2,\n    d\n};'},
        {code: 'var a = {a: 1, b: 2}', options: [{properties: 2}]},
        {code: 'const {\n    a,\n    b,\n    c\n} = {\n    a: 1,\n    b: 2,\n    c: 3\n}'}
    ],
    invalid: [
        {
            code: 'var a = {b: 1, c: 2, d};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {\n    b: 1, c: 2,\n    d: 3,\n    e\n};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {a: 1, b: 2, c: 3, d: 4, e}',
            args: [2, {properties: 2}],
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'const {a, b, c} = {\n    a: 1,\n    b: 2,\n    c: 3\n}',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        }
    ]
});
