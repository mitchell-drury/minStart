const intialState = {};

const GET_USER = "GET_USER";
const REMOVE_USER = "REMOVE_USER";

export default function (state = intialState, action) {
    switch (action.type) {
      case GET_USER:
        return action.user;
      case REMOVE_USER:
        return defaultUser;
      default:
        return state;
    }
  }