import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("phonebook/fetchContactsRequest");
const fetchContactsSuccess = createAction("phonebook/fetchContactsSuccess");
const fetchContactsError = createAction("phonebook/fetchContactsError");

const addContactSuccess = createAction("phonebook/addContactSuccess");
const addContactsError = createAction("phonebook/addContactsError");
const addContactRequest = createAction("phonebook/addContactRequest");

const changeFilter = createAction("phonebook/filter");

const deleteContactSuccess = createAction("phonebook/deleteContactSuccess");
const deleteContactsError = createAction("phonebook/deleteContactsError");
const deleteContactRequest = createAction("phonebook/deleteContactRequest");

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