import { FETCH_USERS, DELETE_USER } from "../actions/types";
import { IUser } from "../models/User";

interface IAction {
  type: string;
  payload?: any;
}

interface IState {
  users: Array<IUser>;
  isLoading: boolean;
}

var initState: IState = {
  users: [],
  isLoading: true
};

export default (state = initState, action: IAction) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};
