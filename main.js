var http = require('http');
var fs = require('fs');
var fs = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.fname);
    console.log(queryData.lname);

    return queryData.fname+queryData.lname

});
app.listen(3000);
