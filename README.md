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

Example of use:

/**
 * see Codebird.js line 524 ff. for method definitions.
 * Here 'user' is the user object but could vary depending on use
 * 'params' is the params needed for each API method. Search http://dev.twitter.com to find the params needed for the given method
**/
Meteor.doRequest = function(method, user, params) {

  //Create new codebird object
  var bird = new Codebird();

  //Consumer your consumer keys - see http://dev.twitter.com for more info
  bird.setConsumerKey(consumerKey, consumerKeySecret);

  //Consumer user keys. Found in the user collection where they are set when a user logs in through Twitter
  bird.setConsumerKey(oauth_consumer_key, oauth_consumer_secret);

  //Make the call. Note that the third parameter 'user._id' is a personal leftover. I will probably exclude it completely sometime.
  bird.__call(method, params, user._id, function(reply, uid, method_template){
    if(reply.errors){
      console.log('Codebird callback error:');
      console.log(reply.errors);
    } else {
      Meteor.codebirdCallback(reply, user, method_template);
    }
  });
};
