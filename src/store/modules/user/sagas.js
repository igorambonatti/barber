import { all, call, put, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateUser(payload) {
  const { email, name, ...rest } = payload.data;

  const profile = Object.assign({ email, name }, rest.oldPassword ? rest : {});

  const response = yield call(api.put, "users", profile);

  toast.success("DEU XESQUEDELE");

  yield put(updateProfileSuccess(response.data));
}

export default all([takeLatest("@user/UPDATE_REQUEST", updateUser)]);
