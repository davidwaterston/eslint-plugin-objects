'use strict';

module.exports = {
    rules: {
        noObjectPropertiesFirstLine: require('./lib/rules/no-object-properties-first-line'),
        noObjectPropertiesLastLine: require('./lib/rules/no-object-properties-last-line'),
        noObjectPropertiesOneLine: require('./lib/rules/no-object-properties-one-line'),
        noObjectPropertySplit: require('./lib/rules/no-object-property-split')
    },
    rulesConfig: {
        noObjectPropertiesFirstLine: 2,
        noObjectPropertiesLastLine: 2,
        noObjectPropertiesOneLine: 2,
        noObjectPropertySplit: 2
    }
};
