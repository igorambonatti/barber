export function updateProfileRequest(data) {
  return {
    type: "@user/UPDATE_REQUEST",
    payload: {
      data
    }
  };
}
export function updateProfileSuccess(profile) {
  return {
    type: "@user/UPDATE_REQUEST_SUCCESS",
    payload: {
      profile
    }
  };
}
export function updateProfileFailure() {
  return {
    type: "@user/UPDATE_REQUEST_FAILURE"
  };
}
