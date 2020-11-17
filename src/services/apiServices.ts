import axios from 'axios';
import store from '../redux/store';

export const api = axios.create({
  baseURL: 'http://trello-purrweb.herokuapp.com',
  responseType: 'json',
});

api.interceptors.request.use((config) => {
  const token = store.getState().user.token;

  if (!token) {
    return config;
  }

  const Authorization = `Bearer ${token}`;

  return {
    ...config,
    headers: {...config.headers, Authorization},
  };
});

export const signInRequest = (email: string, password: string) => {
  return api.post('/auth/sign-in', {email, password});
};

export const signUpRequest = (
  email: string,
  username: string,
  password: string,
) => {
  return api.post('/auth/sign-up', {email, name: username, password});
};

export const getColumns = () => {
  return api.get('/columns');
};

export const addColumn = (title: string) => {
  return api.post('/columns', {title});
};

export const deleteColumn = (id: number) => {
  return api.delete(`/columns/${id}`);
};

export const getCards = () => {
  return api.get('/cards');
};

export const addCard = (value: string, columnId: number) => {
  return api.post('/cards', {
    name: value,
    columnId,
    checked: false,
    subscribed: 0,
    prayedByMe: 0,
    prayedByOthers: 0,
  });
};

export const deleteCard = (id: string) => {
  return api.delete(`/cards/${id}`);
};

export const getComments = () => {
  return api.get('/comments');
};

export const addComment = (username: string, text: string, cardId: string) => {
  return api.post('/comments', {name: username, text, cardId});
};

export const deleteComment = (id: string) => {
  return api.delete(`/comments/${id}`);
};
