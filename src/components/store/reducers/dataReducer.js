import { FETCH_SUCCESS, FETCH_LOADING, FETCH_ERROR } from "../actions/actions";

const initial = {
  loading: null,
  error: null,
  current: null,
};

export const dataReducer = (state = initial, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, current: action.payload };
    case FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
