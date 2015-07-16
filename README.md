#Echo Server

A simple test server to echo desired status code, body, or other parameters

### Usage

To start the server, simply run `node server.js` and then start issuing requests to the server.

#### Example: Status Code
```bash 
$ curl -v http://127.0.0.1:8080/statuscode/999

> GET /statuscode/999 HTTP/1.1
> User-Agent: curl/7.37.1
> Host: 127.0.0.1:8080
> Accept: */*
> 
< HTTP/1.1 999 unknown
< X-Powered-By: Express
< Date: Thu, 16 Jul 2015 18:33:10 GMT
< Connection: keep-alive
< Transfer-Encoding: chunked
```
   
#### Example: Message

```bash
$ curl -v http://127.0.0.1:8080/message/helloworld

> GET /echo/helloworld HTTP/1.1
> User-Agent: curl/7.37.1
> Host: 127.0.0.1:8080
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Connection: close
< Content-Type: text/html; charset=utf-8
< Content-Length: 6
< ETag: W/"6-4b8e39ef"
< Date: Thu, 16 Jul 2015 18:39:39 GMT
< 
* Closing connection 0
* helloworld
```
  
#### Endpoints
 
* GET '/statuscode/:code' => responds with HTTP status :code
* GET '/headers' => responds with payload of the request headers
* GET '/echo/:message' => responds with payload of :message
* POST '/echo' => responds with payload of request body. Note, only returns JSON encoded data


### Dependencies

* express
* body-parser

