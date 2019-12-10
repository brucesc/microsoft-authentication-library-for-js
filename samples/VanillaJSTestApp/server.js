/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');

// Initialize variables.
var PORT = 30662;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use("/dist", express.static(path.join(__dirname, "../../lib/msal-core/dist")));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
    const reqPath = req.path === "/" ? "/index_blankPageRedirectUri.html" : req.path;
    res.sendFile(path.join(__dirname + reqPath));
});

// Start the server.
app.listen(PORT, function() {
    console.log('Listening on port ' + PORT + '...');
});
