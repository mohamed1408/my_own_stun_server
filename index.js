var fs = require('fs');
const express = require('express');
const api = express();
var cors = require('cors')

var corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

api.use(cors());

api.get('/getmyip', (request, response) => {
    var ip = request.ip;
    var data = {ip: ip}
    response.send(data);
});

api.listen(process.env.PORT, () => console.log(process.env.PORT));

// var server = api.listen(process.env.PORT, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
// })