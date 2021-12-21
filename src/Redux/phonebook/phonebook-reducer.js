import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authOperations } from "../auth";

import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  veluesFilter,
} from "./phonebook-actions";
const error = createReducer(null, {
  [addContactRequest]: () => null,
  [addContactSuccess]: () => null,
  [addContactError]: (_, { payload }) => {
    alert(payload)
    return payload
  },
  [deleteContactRequest]: () => null,
  [deleteContactSuccess]: () => null,
  [deleteContactError]: (_, {payload}) => {
    alert(payload)
    return payload
  },
  [fetchContactRequest]: () => null,
  [fetchContactSuccess]: () => null,
  [fetchContactError]: (_, {payload}) => {
    alert(payload)
    return payload
  },
  [authOperations.logOut.fulfilled]: () => null,
})
const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
  [authOperations.logOut.fulfilled]: () => [],
});

const filter = createReducer("", {
  [veluesFilter]: (_, { payload }) => payload,
  [authOperations.logOut.fulfilled]: () => "",
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [authOperations.logOut.fulfilled]: () => false,
});
export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});