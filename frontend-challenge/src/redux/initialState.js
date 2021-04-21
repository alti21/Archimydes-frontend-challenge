import { getToken } from '../utils/Common'

export const initialState = {
    isLoggedIn: false,
    userId: '',
    role: 'user',
    token: getToken(),
    data: '',
  };