const joinURL = (baseURL, url) => {
  return `${baseURL}/${url}`;
};

let Headers = {
  'Content-Type': 'application/json',
};

class Service {
  constructor(props = {}) {
    this.baseURL = '/v2';
    this.token = "5bfb5019d611464b9bef8aede23220f5";
  }

  request(url, method = 'POST', data = null, otherOptions = {}) {
    url = joinURL(this.baseURL, url);
    const {json = true} = otherOptions;
    if (this.token) {
      Headers['Authorization'] = this.token;
    }
    if (otherOptions.headers) {
      Headers = {
        ...Headers,
        ...otherOptions.headers,
      };
    }
    const options = {
      headers: Headers,
      method,
    };
    if (data && json) {
      options.body = JSON.stringify({...data});
    } else if (data && !otherOptions.json) {
      options.body = data;
    }
    console.log(url, options);
    return fetch(url, options);
  }


  get(url) {
    const method = 'GET';
    return this.request(url, method, null)
      .then((res) => {
        console.log('GET', res);
        return res.json();
      })
      .catch((err) => {
        console.log('ERR:', err);
        return {Status: 0, error: 'Network request failed'};
      });
  }

  post(url, data) {
    const method = 'POST';
    return this.request(url, method, data)
      .then((res) => {
        console.log('poS', res);
        return res.json();
      })
      .catch((err) => {
        console.log('ERR:', err);
        return {Status: 0, Body: 'Network request failed'};
      });
  }
}

export default Service;
