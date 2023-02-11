var http = require('http')
var request = require('request');

// 这里填你的replit应用的url，多个url用逗号隔开
let replit_app_urls = ["https://v2code.eggbest.repl.co","https://v2code.eggbest4.repl.co", "https://v2code.hongchengsong.repl.co", "https://v2code.eggbestmy.repl.co","https://v2code.eggbest3.repl.co","https://alist-replit.eggbest4.repl.co","https://v2code.z87nnj8c47.repl.co","https://v2code.eggbest2.repl.co“]

var port = 4000
var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain'})
    response.end('proccess to keep replit application alive is running !\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)

function head(url) {
    request({
        url: url,
        method: "HEAD"
    }, function (error, response, body) {
        if (!error) {
            console.log("地址--" + url + "发包成功！")
            //console.log("statusCode: "+response.statusCode)
            //console.log(response.headers)
        } else
            console.log("请求错误: " + error)
    });
}

function keepalive() {
    for (const url of replit_app_urls) {
        head(url)
    }
}

setInterval(keepalive, 40000);

