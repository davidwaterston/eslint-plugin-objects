## Disallow object property values from appearing on a different line from their key (no-object-property-split)
When declaring an object property, the value of a property should appear on the same line as the key to avoid confusion.

## Rule Details


The following patterns are considered warnings:
```
var a = {b:
1};

var a = {
    b:
    12,
    c: 13, d: 14,
    e:
15
};

var a = {
    b:
    [
        {c: 100},
        {d: 101}
    ]
};

var a = {
    b:
    {
        c: 100,
        d: 101
    }
};

var a = {
    b: {
        c:
        100,
        d: 101
    }
};
```


The following patterns are not considered warnings:
```
var a =
    {
        b: 12
    };

var a = {
    b: 1,
    c: 2
};

var a = {b: 1};

var a = {b: 1,
c: 2
};

var a = {
    b: [
        {c: 100},
        {d: 101}
    ]
};

var a = {
    b: {
        c: 100,
        d: 101
    }
};
```

## Related Rules
- [no-object-properties-first-line](no-object-properties-first-line.md)
- [no-object-properties-last-line](no-object-properties-last-line.md)
- [no-object-properties-one-line](no-object-properties-one-line.md)

## Resources
  - [Rule source](../../lib/rules/objects/no-object-property-split.js)