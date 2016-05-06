/*
 * IbsenBuzz::server
 * @author: Luis Suárez (@Lu1sSuarez)
 * @url: https://github.com/IbsenBuzz/ibsen-server-node
 *
 * @package: IbsenJS
 * @file: routes/server.js
 */

var $express = require('express');
var $route   = $express.Router();

$route.get('/', function ($req, $res) {
    $res.sendFile((__dirname).replace('routes', '') + '/views/server.html');
});

module.exports = $route;
