import axios from "axios";

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchData = () => (dispatch) => {
  dispatch(fetchLoading());
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      console.log(res.data.message);
      dispatch(fetchSuccess(res.data.message));
    })
    .catch((err) => {
      //console.error(err.message);
      dispatch(fetchError(err.message));
    });
};

const fetchLoading = () => {
  return {
    type: FETCH_LOADING,
  };
};

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const fetchError = (message) => {
  return {
    type: FETCH_ERROR,
    payload: message,
  };
};
