import { getToken } from '../utils/Common'

export const initialState = {
    isLoggedIn: false,
    userId: '',
    isAdmin: false,
    token: getToken(),
    data: '',
    stories: [{
        complexity: "",
        cost: 0,
        description: "",
        summary: "",
        time: "",
        type: ""
    }],
    story: {}
  };