import axios from "axios";
import actions from "./phonebook-actions";

const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get("http://localhost:4040/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

const submit =
  ({ name, number }) =>
  async (dispatch) => {
    const item = { name, number };

    dispatch(actions.addContactRequest());

    try {
      const { data } = await axios.post("http://localhost:4040/contacts", item);
      dispatch(actions.addContactSuccess(data));
    } catch (error) {
      dispatch(actions.addContactsError(error));
    }
  };

const deletedContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`http://localhost:4040/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactsError(error)));
};

export default {
  submit,
  deletedContact,
  fetchContacts,
};