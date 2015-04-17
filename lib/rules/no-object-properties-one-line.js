/* global module */

'use strict';

module.exports = function (context) {

    var checkObjectExpression = function(node) {

        var multiplePropertiesOnOneLine;
        var numberOfLines;
        var numberOfProperties = node.properties.length;
        var objHasMultipleProperties = (numberOfProperties > 1);

        if (objHasMultipleProperties) {
            numberOfLines = ((node.properties[node.properties.length - 1].loc.start.line) - node.properties[0].loc.start.line) + 1;
            multiplePropertiesOnOneLine = (numberOfLines < numberOfProperties);

            if (multiplePropertiesOnOneLine) {
                context.report(node, 'multiple object properties on one line');
            }
        }
    };

    return {
        ObjectExpression: checkObjectExpression
    };

};
