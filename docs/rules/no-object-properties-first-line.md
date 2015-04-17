## Disallow first property of a multiple property object to be declared on first line (no-object-properties-first-line)
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the first line containing only the opening brace and the first property name taking a new line.

## Rule Details


The following patterns are considered warnings:
```
var a = {b: 1, c: 2};

var a = {b: 1,
    c: 2,
    d: 3
};

var a = {b:
    1,
    c: 2};
```


The following patterns are not considered warnings:
```
var a = {};

var a = {b: 1};

var a = {
    b: 1,
    c: 2};


var a = {
    b: 1,
    c: 2
};
```

## Related Rules
- [no-object-properties-last-line](no-object-properties-last-line.md)
- [no-object-properties-one-line](no-object-properties-one-line.md)
- [no-object-property-split](no-object-property-split.md)

## Resources
 - [Rule source](../../lib/rules/objects/no-object-properties-first-line.js)