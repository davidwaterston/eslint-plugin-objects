/* global module */

'use strict';

module.exports = function (context) {
    /**
     * OPTIONS
     * "objects/no-object-properties-one-line": [2, {
     *     properties: 3 // max one-line properties
     * }
     */

    var options = context.options[0] || {};
    var allowedProperties = options.properties || 0;

    var checkObjectExpression = function (node) {

        var multiplePropertiesOnOneLine;
        var numberOfLines;
        var numberOfProperties = node.properties.length;
        var objHasMultipleProperties = (numberOfProperties > 1);

        if (objHasMultipleProperties && numberOfProperties > allowedProperties) {
            numberOfLines = ((node.properties[node.properties.length - 1].loc.start.line) - node.properties[0].loc.start.line) + 1;
            multiplePropertiesOnOneLine = (numberOfLines < numberOfProperties);

            if (multiplePropertiesOnOneLine) {
                context.report(node, 'multiple object properties on one line');
            }
        }
    };

    return {
        ObjectExpression: checkObjectExpression,
        ObjectPattern: checkObjectExpression
    };

};
