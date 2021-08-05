import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const {
  fetchContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  changeFilter,
} = actions;

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) =>
    state.map((contact) => contact.name).includes(payload.name)
      ? alert(`${payload.name} is already in contacts.`)
      : [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});