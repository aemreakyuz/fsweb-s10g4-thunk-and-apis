import axios from "axios";
import { toast } from "react-toastify";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchData = () => (dispatch) => {
  const loadingToast = toast.loading("Please wait...", {
    autoClose: 2000,
    closeOnClick: true,
  });

  dispatch(fetchLoading());
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      console.log(res.data.message);
      toast.update(loadingToast, "All is Good");
      toast.update(loadingToast, {
        render: "All is good",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
      });

      dispatch(fetchSuccess(res.data.message));
    })
    .catch((err) => {
      //console.error(err.message);
      toast.update(loadingToast, {
        render: "All is Bad",
        type: "error",
        isLoading: false,
        closeOnClick: true,
      });
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
