var fetch = require('isomorphic-unfetch');
const QueryString = require('qs');
const FormData = require('form-data');

function request(url, options) {
  if (!options)
    options = {};

  let requestOptions = Object.assign({}, options, { method: options.method && options.method.toUpperCase() || 'GET' });
  if (options.method !== 'GET') {
    if (options.json) {
      requestOptions = Object.assign(requestOptions, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(options.json)
      })
    }
    else if (options.form) {
      requestOptions = Object.assign(requestOptions, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: QueryString.stringify(options.form)
      })
    }
    else if (options.formData) {
      const data = new FormData()
      Object.keys(options.formData).forEach(function (key) {
        const t = options.formData[key]
        if (t)
          data.append(key, t)
      })

      requestOptions = Object.assign(requestOptions, {
        body: data
      })
    }
  }

  // Custom headers
  if (options.headers) {
    requestOptions = Object.assign(requestOptions, { headers: Object.assign(requestOptions.headers || {}, options.headers) })
  }

  if (options.qs) {
    url = url + '?' + QueryString.stringify(options.qs)
  }

  return fetch(url, requestOptions);
}

function get(url, options) {  
  return request(url, Object.assign(options || {}, { method: 'GET' }))
}

function head(url, options) {
  return request(url, Object.assign(options || {}, { method: 'HEAD' }))
}

function options(url, options) {
  return request(url, Object.assign(options || {}, { method: 'OPTIONS' }))
}

function post(url, options) {
  return request(url, Object.assign(options || {}, { method: 'POST' }))
}

function put(url, options) {
  return request(url, Object.assign(options || {}, { method: 'PUT' }))
}

function patch(url, options) {
  return request(url, Object.assign(options || {}, { method: 'PATCH' }))
}

function del(url, options) {
  return request(url, Object.assign(options || {}, { method: 'DELETE' }))
}

module.exports = {
  get: get,
  post: post,
  put: put,
  patch: patch,
  del: del,
  head: head,
  options: options,
  request: request
}