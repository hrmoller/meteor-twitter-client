Package.describe({
    summary: "Twitter client for Meteor",
    description: "Twitter client for Meteor based on the codebird-js library"
});

Npm.depends({xmlhttprequest: "1.5.0"});

Package.on_use(function (api) {
    api.add_files("codebird.js", "server");
    api.add_files("sha1.js", "server");
});
