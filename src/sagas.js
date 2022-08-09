import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "./actions";
import { GET_PROJECTS_FETCH, GET_PROJECTS_SUCCESS } from "./actions";

function usersFetch() {
  return fetch("https://admin.naxa.com.np/api/category").then((response) =>
    response.json()
  );
}
function projectsFetch() {
  return fetch("https://admin.naxa.com.np/api/projects").then((response) =>
    response.json()
  );
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch);
  yield put({ type: GET_USERS_SUCCESS, users });
}
function* workGetProjectsFetch() {
  const projects = yield call(projectsFetch);
  yield put({ type: GET_PROJECTS_SUCCESS, projects });
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
  yield takeEvery(GET_PROJECTS_FETCH, workGetProjectsFetch);
}
export default mySaga;
