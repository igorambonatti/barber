import { all, call, put, takeLatest } from "redux-saga/effects";

import { toast } from "react-toastify";

import api from "../../../services/api";

import { updateProfileSuccess, updateProfileFailure } from "./actions";

export function* updateProfile({ payload }) {
  try {
    const { email, name, ...rest } = payload.data;

    const profile = Object.assign(
      { email, name },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, "users", profile);

    toast.success("DEU XESQUEDELE");

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error("DEU RUIM AMIGOS");
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest("@user/UPDATE_REQUEST", updateProfile)]);
