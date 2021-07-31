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

    if (method === "GET") {
        const requestUrl = new URL(url, `https://xiaoenzhong.github.io/%E4%BD%9C%E5%93%81%E9%9B%86/login/login.html}`);
        //console.log(requestUrl);
        //console.log(requestUrl.searchParams.get("lang"));
        url = requestUrl.pathname;
        const lang = requestUrl.searchParams.get("lang");
        let selector;

        if (lang === null || lang === "en") {
            selector = "";
        } else if (lang === "zh") {
            selector = "-zh";
        } else {
            selector = "";
        }

        if (url === "/") {
            sendResponse(`index${selector}.html`, 200, response);
        } else if (url === "/about.html") {
            sendResponse(`about${selector}.html`, 200, response);
        } else if (url === "/login.html") {
            sendResponse(`login${selector}.html`, 200, response);
        } else if (url === "/login-success.html") {
            sendResponse(`login-success${selector}.html`, 200, response);
        } else if (url === "/login-fail.html") {
            sendResponse(`login-fail${selector}.html`, 200, response);
        }
     else {
        sendResponse(`404${selector}.html`, 404, response);
    }
} else {
    
    if (url === "/login") {
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

    server.listen(port, ip, () => {
  console.log(`server is running at https://xiaoenzhong.github.io/%E4%BD%9C%E5%93%81%E9%9B%86/login/login.html`);
});
