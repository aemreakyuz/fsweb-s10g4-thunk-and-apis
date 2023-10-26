import { FAV_ADD, FAV_REMOVE, GET_FAVS_FROM_LS } from "../actions/actions";

const initial = {
  favs: [],
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("s10g4", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("s10g4"));
}

export function favReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const newAddedState = {
        ...state,
        favs: [action.payload, ...state.favs],
      };
      writeFavsToLocalStorage(newAddedState);
      return newAddedState;

    case FAV_REMOVE:
      const newRemovedState = {
        ...state,
        favs: state.favs.filter((f) => f !== action.payload),
      };

      writeFavsToLocalStorage(newRemovedState);
      return newRemovedState;
    case GET_FAVS_FROM_LS:
      return { ...state, favs: readFavsFromLocalStorage() || [] };
    default:
      return state;
  }
}
