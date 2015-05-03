# eslint-plugin-objects

A small collection of [ESLint](https://www.github.com/eslint/eslint) rules that enforce more strict stylistic conventions for the layout of multi-property objects.

<a href="http://semver.org" target="_blank" alt="Semantic Versioning"><img src="https://img.shields.io/badge/semver-1.1.1-lightgrey.svg?style=flat-square"></a>
<a href="https://github.com/davidwaterston/eslint-plugin-objects/blob/master/LICENSE" target="_blank" alt="MIT License"><img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square"></a>
<a href="#verifying-releases" alt="Releases signed with Gnu Privacy Guard"><img src="https://img.shields.io/badge/gpg-signed-green.svg?style=flat-square"></a>
<a href="https://travis-ci.org/davidwaterston/eslint-plugin-objects"><img src="http://img.shields.io/travis/davidwaterston/eslint-plugin-objects/master.svg?style=flat-square"></a>
<a href='https://coveralls.io/r/davidwaterston/eslint-plugin-objects?branch=master'><img src='https://coveralls.io/repos/davidwaterston/eslint-plugin-objects/badge.svg?branch=master&style=flat-square' alt='Coverage Status' /></a>
<a href="https://gitter.im/davidwaterston/eslint-plugin-objects" target="_blank" alt="Join the chat at https://gitter.im/davidwaterston/eslint-plugin-objects"><img src="https://badges.gitter.im/Join%20Chat.svg"></a>
  
  
## Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally, and then install the plugin (see below). It is important to note that a global instance of ESLint can only use plugins that are also installed globally. A local instance of ESLint, however, can make use of both local and global ESLint plugins.

#### Global Installation

    $ npm install -g eslint
    $ npm install -g eslint-plugin-objects

#### Local Installation

    $ npm install --save-dev eslint
    $ npm install --save-dev eslint-plugin-objects

## Configuration

Add the `plugins` section to your [config](http://eslint.org/docs/user-guide/configuring) file if not already present and specify `eslint-plugin-objects` as a plugin. The `eslint-plugin-` prefix may be omitted:

```json
{
  "plugins": [
    "objects"
  ]
}
```

Enable the rules that you would like to use, for example:

```json
{
  "rules": {
    "objects/no-object-property-split": 2,
    "objects/no-object-properties-first-line": 1
  }
}
```

## List of supported rules

#### Stylistic Choices

* [no-object-properties-first-line](docs/rules/no-object-properties-first-line.md): Disallow first property of a multiple property object from being declared on first line. (On by default)
* [no-object-properties-last-line](docs/rules/no-object-properties-last-line.md): Disallow last property of a multiple property object to be declared on last line. (On by default)
* [no-object-properties-one-line](docs/rules/no-object-properties-one-line.md): Disallow multiple object properties to be declared on one line. (On by default)
* [no-object-property-split](docs/rules/no-object-property-split.md): Disallow object property values from appearing on a different line from their key. (On by default)

  
## Compatibility
This plugin has been tested and confirmed to work with ESLint versions 0.18.0 and later. 

  
## Release History
See the [change log](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/CHANGELOG.md) file for more details.
  
  
## Verifying Releases
I use <a href="http://semver.org" target="_blank" alt="Semantic Versioning">Semantic Versioning</a> to number releases. Each release is tagged with the appropriate version number and signed using <a href="https://www.gnupg.org" target="_blank" alt="Gnu Privacy Guard (GPG)">Gnu Privacy Guard (GPG)</a>. The public key used to sign releases is  
```
Name: David Waterston  
Email: david@davidwaterston.com  
Key ID: A7AD9C85  
Signature: 71A9 DC13 447A 1E4F C6EB  5D64 DE08 A991 A7AD 9C85  
```
This public key is included in the repository with a SHA1 of 16d013451476fa4a1a67d6ad4b90583e205b53b1.  
After cloning the repo, and assuming you have GPG installed correctly, you can import this key into your keychain
```
git cat-file blob pubkey | gpg --import
```
When this public key is successfully imported, you can use it to verify the integrity of any of the tagged releases of this repo
```
git tag -v v1.0.0
```
which should produce output similar to:
```
object 04f37a55784c1f3abc2cf927a935a488aa954035  
type commit  
tag v1.0.0  
tagger David Waterston <david@davidwaterston.com> 1427387056 +0000  
  
Initial commit  
  
This is just an example so don't get fixated on the details, what matters is the signature!
gpg: Signature made Thu 26 Mar 16:24:16 2015 GMT using RSA key ID A7AD9C85
gpg: Good signature from "David Waterston <david@davidwaterston.com>" [ultimate]
```
The important thing to notice here is that the RSA key ID matches mine (A7AD9C85) and the line that says that this is a good signature.  
  
The public key can further be verified by checking the details held on <a href="http://pgp.mit.edu/pks/lookup?search=david%40davidwaterston.com&op=index&fingerprint=on&exact=on" target="_blank" alt="pgp.mit.edu">pgp.mit.edu</a>.
  
  
## License
Copyright (c) 2015 David Waterston. All rights reserved.  
Distributed under an MIT license. See the [LICENSE](https://github.com/davidwaterston/eslint-plugin-objects/blob/master/LICENSE) file for more details.
