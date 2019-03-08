import axios from 'axios';

// function getContentsData(){
//   return axios.get('https://swirlflag.github.io/portfolio/src/data/contentsData.json');
// }


const config = {
  baseUrl : 'https://swirlflag.github.io/portfolio/src/data'
}

function getAppData(){
  return axios.get(`${config.baseUrl}/appData.json`);
}
function getAdminData(){
  return axios.get(`${config.baseUrl}/adminData.json`);
}

export {
  getAppData,
  getAdminData,
}
