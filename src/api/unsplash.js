import axios from 'axios';

export default function (term) {
  return axios.get('https://api.unsplash.com/search/photos', {
    params: { query: term },
    headers: {
      Authorization: 'Client-ID d8bd8bf84026edb300bc8f60cd9ae03cc9a60887a4582edffeb1a902c07912f7'
    }
  });
}
