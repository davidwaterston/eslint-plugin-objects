# eslint-plugin-objects
A small collection of custom [ESLint](http://eslint.org) rules to enable tightening up of the coding style applied to multi-property objects.

- [no-object-properties-one-line](rules/no-object-properties-one-line.md)  
Disallow multiple object properties to be declared on one line.  
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line.

- [no-object-properties-first-line](rules/no-object-properties-first-line.md)  
Disallow first property of a multiple property object to be declared on first line.   
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the first line containing only the opening brace and the first property name taking a new line.

- [no-object-properties-last-line](rules/no-object-properties-last-line.md)  
Disallow last property of a multiple property object to be declared on last line.   
When declaring an object with multiple properties it is desirable to declare each property of the object on a separate line with the last line containing only the closing brace and the last property name/value on the preceding line.

- [no-object-property-split](rules/no-object-property-split.md)  
Disallow object property values from appearing on a different line from their key.  
When declaring an object property, the value of a property should appear on the same line as the key to avoid confusion.