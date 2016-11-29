/* global module */

'use strict';

module.exports = function (context) {

    var checkObjectExpression = function (node) {

        var props = node.properties;
        var numberOfProperties = props.length;
        var i;
        var nameAndValueAreOnDifferentLines;

        for (i = 0; i < numberOfProperties; i++) {
            nameAndValueAreOnDifferentLines = (props[i].key.loc.start.line !== props[i].value.loc.start.line);
            if (nameAndValueAreOnDifferentLines) {
                context.report(
                    node,
                    {
                        line: props[i].key.loc.start.line,
                        column: props[i].key.loc.start.column
                    },
                    'object property key "' + props[i].key.name + '" has its value on a different line'
                );
            }
        }

    };

    return {
        ObjectExpression: checkObjectExpression
    };

};
