/*
 * IbsenBuzz::server
 * @author: Luis Suárez (@Lu1sSuarez)
 * @url: https://github.com/IbsenBuzz/ibsen-server-node
 *
 * @package: IbsenJS
 * @file: routes/buzz.js
 */

var $express = require('express');
var $route   = $express.Router();

$route.get('/buzz', function ($req, $res) {
    $res.sendFile((__dirname).replace('routes', '') + '/views/buzz.html');
});

module.exports = $route;
