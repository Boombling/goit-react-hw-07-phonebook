import { createSelector } from "reselect";

const getValue = (state) => state.contacts.filter;
const getAllContacts = (state) => state.contacts.items;

const getVisibleContact = createSelector(
  [getValue, getAllContacts],
  (filter, items) => {
    const filterLowerCase = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(filterLowerCase)
    );
  }
);

export default {
  getValue,
  getVisibleContact,
};