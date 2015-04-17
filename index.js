'use strict';

module.exports = {
    rules: {
        'no-object-properties-first-line': require('./lib/rules/no-object-properties-first-line'),
        'no-object-properties-last-line': require('./lib/rules/no-object-properties-last-line'),
        'no-object-properties-one-line': require('./lib/rules/no-object-properties-one-line'),
        'no-object-property-split': require('./lib/rules/no-object-property-split')
    },
    rulesConfig: {
        'no-object-properties-first-line': 2,
        'no-object-properties-last-line': 2,
        'no-object-properties-one-line': 2,
        'no-object-property-split': 2
    }
};
