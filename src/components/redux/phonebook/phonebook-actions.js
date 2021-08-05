import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactsError = createAction("contacts/addContactsError");
const addContactRequest = createAction("contacts/addContactRequest");

const changeFilter = createAction("contacts/filter");

const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactsError = createAction("contacts/deleteContactsError");
const deleteContactRequest = createAction("contacts/deleteContactRequest");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactsError,
  deleteContactSuccess,
  deleteContactsError,
  deleteContactRequest,
};