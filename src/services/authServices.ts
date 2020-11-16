import axios from 'axios';

const baseURL = 'http://trello-purrweb.herokuapp.com';

export const signInRequest = (email: string, password: string) => {
  return axios({
    method: 'post',
    url: `${baseURL}/auth/sign-in`,
    data: {
      email,
      password,
    },
  });
};

export const signUpRequest = (
  email: string,
  username: string,
  password: string,
) => {
  return axios({
    method: 'post',
    url: `${baseURL}/auth/sign-up`,
    data: {
      email,
      name: username,
      password,
    },
  });
};
