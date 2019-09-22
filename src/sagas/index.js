import { all } from "redux-saga/effects";
import todoSagas from "./todo";

export default function* rootSaga() {
  yield all([todoSagas()]);
}
