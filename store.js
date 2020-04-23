import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleWare from "redux-thunk";

import data from "./data/data.json";

const startStore = {
  cards: []
};

export const initialCards = () => {
  return {
    type: "INITIAL_CARDS",
    cards: data
  };
};

export const addItems = item => ({ type: "ADD", item });

export const reducers = (state = startStore, action) => {
  switch (action.type) {
    case "INITIAL_CARDS":
      return {
        cards: action.cards
      };
    case "ADD":
      return {
        ...state,
        cards: [...state.cards, action.item]
      };

    default:
      return state;
  }
};

export const initStore = (initialState = startStore) =>
  createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleWare))
  );
