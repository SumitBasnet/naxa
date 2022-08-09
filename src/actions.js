export const GET_USERS_FETCH = "GET_USERS_FETCH";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_PROJECTS_FETCH = "GET_PROJECTS_FETCH";
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";

export const getUsersFetch = () => ({
  type: GET_USERS_FETCH,
});
export const getProjectsFetch = () => ({
  type: GET_PROJECTS_FETCH,
});
