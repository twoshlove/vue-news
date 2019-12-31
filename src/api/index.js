import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

async function fetchList(pageName){
  try{
    // return axios.get(`${config.baseUrl}${pageName}/1.json`);
    // return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  }catch(error){
    console.log(error);
  }
}

function fetchUserInfo(username){
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskItem(askid){
  return axios.get(`${config.baseUrl}item/${askid}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchAskItem,
  fetchList,
}