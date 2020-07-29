import streams from "../apis/streams";
import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => {
  // async request
  // utilize redux-thunk
  return async (dispatch) => {
    // POST /streams endpoint
    streams.post("/streams", formValues);
  };
};
