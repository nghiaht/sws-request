# sws-request

[![npm version](http://img.shields.io/npm/v/REPO.svg?style=flat)](https://npmjs.org/package/sws-request "View this project on npm")


* Hybrid Node.js request library for our use cases (React.js client and server side rendering apps).

## API Usages

* **request(url, options)**

  We follow the minimal usages of request.js, by using the following keys in the request options.
  * **Body**: *json* (application/json), *form* (url-encoded form), *formData* (multipart/form).
  * **Query parameters**: *qs*.
  * **Custom headers**: *headers*.




```
const swsRequest = require('sws-request');

swsRequest.request(
    'http://localhost:8080/api/v1/post',
    {
        method: 'post',

        // body can be one within json, form, or formData
        json: {
            name: 'sws',
            key: 'value
        },
        
        form: {
            ...
        },

        formData: {
            ...
        },

        qs: {
            accessToken: 'auth'
        },

        headers: {
            "Authorization": "Bearer JWT"
        }
    }
).then(function (response) {
    // Check status, error if needed

    response.json().then(function (data) {
        return data;
    })
});

```

## The Last Word

* No need to install this package, you can import, modify it as a standalone file in your project. Any suggestions are welcome! 

* nghiaht (SWS - Soft World Studio).