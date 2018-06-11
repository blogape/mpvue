import axios from 'axios'
let testurl = ''
let publicurl = ''
let config = publicurl

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.post[]
export default {
  get: function (url, params, callback, paramCache = {}) {
    // save stora
    if (paramCache) {
      for (let n in paramCache) {
        switch (n) {
          case 'scroll':
            let scache = this.fetchSessionStora(paramCache[n])
            if (scache && scache.currentview === paramCache[n]) {
              scache['is_scroll'] = 1
              return callback(scache)
            }
            break
          case 'get':
            let gcache = this.fetchStora(paramCache[n])
            if (gcache) {
              return callback(gcache)
            }
            break
          default:
            break
        }
      }
    }
    axios.get(config + url,{headers: {'csrf-token': window.localStorage["user"]}},    {
      params: params
    })
      .then(function (response) {
        let data = response.data
        let status = response.status
        // console.log(data);
        return callback(data, status)
      })
      .catch(function (error) {
        if (!error.response) {
          return false
        }
        switch (error.response.status) {
          case 401:
            return callback(error.response.data)
          case 403:
            return callback(error.response.data)
          case 422:
            return callback(error.response.data)
          default:
            return callback(error.response)
        }
      })
  },
  post: function (url, params, callback) {
    let jstring = ''
    for (let key in params) {
      let p = params[key].toString().replace(/\&/g, '%26')
      jstring = jstring + key + '=' + p + '&'
    }
    jstring = jstring.replace(/\+/g, '%2B')
    axios.post(config + url, jstring)
      .then(function (response) {
        let data = response.data
        return callback(data)
      })
      .catch(function (error) {
        if (!error.response) {
          return false
        }
        switch (error.response.status) {
          case 401:
            return callback(error.response.data)
          case 403:
            return callback(error.response.data)
          case 422:
            return callback(error.response.data)
          default:
            return callback(error.response)
        }
      })
  },
  put: function (url, params, callback) {
    axios.put(config + url, params)
      .then(function (response) {
        let data = response.data
        return callback(data)
      })
      .catch(function (error) {
        if (!error.response) {
          return false
        }
        switch (error.response.status) {
          case 401:
            return callback(error.response.data)
          case 403:
            return callback(error.response.data)
          case 422:
            return callback(error.response.data)
          default:
            return callback(error.response)
        }
      })
  },
  delete: function (url, params, callback) {
    axios.delete(config + url, params)
      .then(function (response) {
        let data = response.data
        return callback(data)
      })
      .catch(function (error) {
        if (!error.response) {
          return false
        }
        switch (error.response.status) {
          case 401:
            return callback(error.response.data)
          case 403:
            return callback(error.response.data)
          case 422:
            return callback(error.response.data)
          default:
            return callback(error.response)
        }
      })
  }
}
