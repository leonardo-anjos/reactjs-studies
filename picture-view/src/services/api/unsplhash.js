import axios from 'axios';

export default axios.create({
  
  baseURL:'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 53be290af7a7f60340b943bd3085b23495ce40e287e198fec79fe88961698e98'
  }
  
});
