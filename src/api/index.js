import requests from "./request";

export const getRegister = (username, password) => requests({
  url: '/api/register', method: 'post', params: {
    username: username,
    password: password
  }
})

export const getLogin = (username, password) => requests({
  url: '/api/login', method: 'post', params: {
    username: username,
    password: password
  }
});

export const getProfile = () => requests({
  url: '/api/profile', method: 'get'
});

export const getSearch = (keyword) => requests({
  url: '/api/search', method: 'post',
  params: {keyword: keyword}
});
