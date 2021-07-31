const http = require("http");
const fs = require("fs");
const qs = require("querystring");



const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./login/${filename}` , (error, data) => {
        if (error) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain");
            response.end("sorry, internal error");
        }
        else {
            response.statusCode = statusCode;
            response.setHeader("Contant-Type", "text/html");
            response.end(data);
        }
    });
};

//request = 請求object
//response = 響應object
const server = http.createServer((request, response) => {
    //console.log(request.url, request.method);
    const method = request.method;
    let url = request.url;

    
    if (url === "/process-login") {
        let body = [];

        request.on("data", (chunk) =>{
            body.push(chunk);
        } );
        request.on("end", () =>{ 
            body = Buffer.concat(body).toString();
            body = qs.parse(body);
            console.log(body);

            if (body.username === "enzhong" && body.password === "enzhong123") {
                response.statusCode = 301;
                response.setHeader("Location","/login-success.html");
            } else {
                response.statusCode = 301;
                response.setHeader("Location","/login-fail.html");
            }
            response.end();
        });
    }
} 
  
});
//1.端口(port) 2.ip地址 3.回調函數(callback)

//server.listen(port, ip, () => {
//  console.log(`server is running at http://${ip}:${port}`);
//});
