import { FAV_ADD, FAV_REMOVE, GET_FAVS_FROM_LS } from "../actions/actions";

const initial = {
  favs: [],
};

function writeFavsToLocalStorage(state) {
  localStorage.setItem("Favorites", JSON.stringify(state.favs));
}

function readFavsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("Favorites"));
}

export function favReducer(state = initial, action) {
  switch (action.type) {
    case FAV_ADD:
      const checkExisting = state.favs.find(
        (item) => action.payload.id === item.id
      );
      if (checkExisting) {
        return { state };
      } else {
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      }
    case FAV_REMOVE:
      const removedFavList = state.favs.filter(
        (item) => action.payload !== item.id
      );
      return {
        ...state,
        favs: removedFavList,
      };

    case GET_FAVS_FROM_LS:
      return { state };
    default:
      return state;
  }
}
