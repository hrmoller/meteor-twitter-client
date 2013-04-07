twitter_client
==============

Twitter client package for Meteor
---------------------------------

Basically this package is the codebird-js library (by mynetx) found at
https://github.com/mynetx/codebird-js wrapped in a package structure conforming
with the meteor.js guidelines.

However it has been necessary to make certain changes to codebird-js in order to
make the library work with meteor as intended.

It is still very much work in progress and anyone should of course feel free
to contribute, comment or fork this project as needed.

To include the package in your meteor project, clone this repository into the
root of you app at appname/packages/ so the sctructure of your app looks
somewhat like this:

appname
 ├── .meteor
 ├── client
 ├── packages
 |   └── twitter_client
 |        ├── package.js
 |        ├── codebird.js
 |        └── sha1.js
 └── server

Examples of use might surface in a distant future...
