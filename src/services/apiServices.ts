import axios from 'axios';
import store from '../redux/store';

const token = store.getState().user.token;
const baseURL = 'http://trello-purrweb.herokuapp.com';
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
};

export const getColumns = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/columns`,
    headers,
  });
};

export const addColumn = (title: string) => {
  return axios({
    method: 'post',
    url: `${baseURL}/columns`,
    headers,
    data: {
      title,
    },
  });
};

export const deleteColumn = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/columns/${id}`,
    headers,
  });
};

export const getCards = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/cards`,
    headers,
  });
};

export const addCard = (value: string, columnId: string) => {
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

export const deleteCard = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/cards/${id}`,
    headers,
  });
};

export const getComments = () => {
  return axios({
    method: 'get',
    url: `${baseURL}/comments`,
    headers,
  });
};

export const addComment = (username: string, text: string, cardId: string) => {
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

export const deleteComment = (id: string) => {
  return axios({
    method: 'delete',
    url: `${baseURL}/comments/${id}`,
    headers,
  });
};
