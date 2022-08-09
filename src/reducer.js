import { GET_USERS_SUCCESS, GET_PROJECTS_SUCCESS } from "./actions";

const myFirstReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.users };
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};
export default myFirstReducer;
