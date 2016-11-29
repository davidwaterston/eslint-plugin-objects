'use strict';

var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester({parserOptions: {ecmaVersion: 2015}});  
var rule = require('../../lib/rules/no-object-property-split');

eslintTester.run('no-object-property-split', rule, {
    valid: [
        {code: 'var a =\n    {\n        b: 12\n    };'},
        {code: 'var a = {\n    b: 1,\n    c: 2\n};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {b: 1,\nc: 2\n};'},
        {code: 'var a = {\n    b: [\n        {c: 100},\n        {d: 101}\n    ]\n};'},
        {code: 'var a = {\n    b: {\n        c: 100,\n        d: 101\n    }\n};'}
    ],
    invalid: [
        {
            code: 'var a = {b:\n1};',
            errors: [
                {message: 'object property key "b" has its value on a different line'}
            ]
        },
        {
            code: 'var a = {\n    b:\n    12,\n    c: 13, d: 14,\n    e:\n15\n};',
            errors: [
                {message: 'object property key "b" has its value on a different line'},
                {message: 'object property key "e" has its value on a different line'}
            ]
        },
        {
            code: 'var a = {\n    b:\n    [\n        {c: 100},\n        {d: 101}\n    ]\n};',
            errors: [
                {message: 'object property key "b" has its value on a different line'}
            ]
        },
        {
            code: 'var a = {\n    b:\n    {\n        c: 100,\n        d: 101\n    }\n};',
            errors: [
                {message: 'object property key "b" has its value on a different line'}
            ]
        },
        {
            code: 'var a = {\n    b: {\n        c:\n        100,\n        d: 101\n    }\n};',
            errors: [
                {message: 'object property key "c" has its value on a different line'}
            ]
        }
    ]
});
