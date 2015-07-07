# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]
### Added
- The _no-object-properties-one-line_ rule now supports a second parameter. Previously, if more than one property was declared on a single line a warning would be thrown. This can be configured to allow any preferred limit. The syntax is as follows:  
"objects/no-object-properties-one-line": [2, {properties: 3}]    
where _properties_ specifies the maximum number of properties allowed on one line.  
Thanks to [yamalight](https://github.com/yamalight) for this change. Rule documentation will be updated when this change is released (version 1.2.0).
- Proposed features/changes can be now be suggested/voted for at [FeatHub](http://feathub.com/davidwaterston/eslint-plugin-objects). The [README.md](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/README.md) now has a new section - [_Missing a feature?_](https://github.com/davidwaterston/eslint-plugin-objects#missing-a-feature) - which links directly to this project in [FeatHub](http://feathub.com/davidwaterston/eslint-plugin-objects) and includes a dynamic list of the features suggested / votes cast so far.
- Added badge and new text section - [_Future Plans_](https://github.com/davidwaterston/eslint-plugin-objects#future-plans) - in [README.md](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/README.md) that links to this project in [Waffle.io](https://waffle.io/davidwaterston/eslint-plugin-objects).

### Changed
- Replaced hardcoded version number badge in [README.md](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/README.md) with one that gets latest version number from GitHub.
- Replaced remaining HTML badges in [README.md](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/README.md) with Markdown equivalents.


## [1.1.1] - 2015-05-03

### Changed
- Update Chai to version 2.3.0.
- Update ESLint to version 0.20.0.
- Update Istanbul to version 0.3.13.
- Update Mocha to version 2.2.4.


## [1.1.0] - 2015-04-17

### Fixed
- Rules in the rulesConfig were badly named. This change brings them into line with ESLint convention.


## [1.0.0] - 2015-04-17

### Added
- Initial release.
