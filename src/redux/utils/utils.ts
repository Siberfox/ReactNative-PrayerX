import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const token = AsyncStorage.getItem('token');

export default axios.create({
  baseURL: 'http://trello-purrweb.herokuapp.com',
  headers: {
    Aithorization: `Bearer ${token}`,
  },
});
