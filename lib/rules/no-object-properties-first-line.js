/* global module */

'use strict';

module.exports = function (context) {

    var checkObjectExpression = function (node) {

        var numberOfProperties = node.properties.length;
        var objHasMultipleProperties = (numberOfProperties > 1);
        var propertyOnSameLineAsOpeningBrace;

        if (objHasMultipleProperties) {
            propertyOnSameLineAsOpeningBrace = (node.properties[0].loc.start.line === node.loc.start.line);

            if (propertyOnSameLineAsOpeningBrace) {
                context.report(node, 'object property on same line as opening brace');
            }
        }
    };

    return {
        ObjectExpression: checkObjectExpression
    };

};
