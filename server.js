/*
 * IbsenBuzz::server
 * @author: Luis Suárez (@Lu1sSuarez)
 * @url: https://github.com/IbsenBuzz/ibsen-server-node
 *
 * @package: IbsenJS
 * @file: server.js
 */

var $express = require('express');
var $path    = require('path');
var $app     = $express();
var $server  = require('http').createServer($app);
var $config  = {
    PORT:   3002,
    SERVER: '127.0.0.1'
};

$app.use('/static', $express.static(__dirname + '/public'));
$app.set('views', $path.join(__dirname, 'views'));

$app.use('/', require('./routes/server'));

$server.listen($config.PORT, $config.SERVER, function () {
    console.log('IbsenBuzz::server is running and listening to port %s:%d...', $config.SERVER, $config.PORT);
});