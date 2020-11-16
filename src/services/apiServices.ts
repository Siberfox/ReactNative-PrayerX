import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem('token');
const baseURL = 'http://trello-purrweb.herokuapp.com';
const headers = {
  Authorization: `Bearer ${token._W}`,
  'Content-Type': 'application/json',
};

export const getColumnsApi = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/columns`,
    headers,
  });
};

export const addColumnApi = (title: string) => {
  return axios({
    method: 'post',
    url: `${baseURL}/columns`,
    headers,
    data: {
      title,
    },
  });
};

export const deleteColumnApi = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/columns/${id}`,
    headers,
  });
};

export const getCardsApi = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/cards`,
    headers,
  });
};

export const addCardApi = (value: string, columnId: string) => {
  return axios({
    method: 'post',
    url: `${baseURL}/cards`,
    headers,
    data: {
      name: value,
      columnId,
      checked: false,
      subscribed: 0,
      prayedByMe: 0,
      prayedByOthers: 0,
    },
  });
};

export const deleteCardApi = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/cards/${id}`,
    headers,
  });
};

export const getCommentsApi = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/comments`,
    headers,
  });
};

export const addCommentApi = (
  username: string,
  text: string,
  cardId: string,
) => {
  return axios({
    method: 'post',
    url: `${baseURL}/comments`,
    headers,
    data: {
      name: username,
      text,
      cardId,
    },
  });
};

export const deleteCommentApi = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/comments/${id}`,
    headers,
  });
};
