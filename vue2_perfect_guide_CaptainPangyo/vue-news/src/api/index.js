import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

// 2. API 함수를 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
  try {
    const response = axios.get(`${config.baseUrl}ask/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchList(pageName) {
  try {
    const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchUserInfo(username) {
  try {
    const response = axios.get(`${config.baseUrl}user/${username}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

function fetchCommentItem(id) {
  try {
    const response = axios.get(`${config.baseUrl}item/${id}.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
};
