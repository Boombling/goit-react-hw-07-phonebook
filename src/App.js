import React, { Component } from 'react';
import PhoneBook from './components/Phonebook/Phonebook';
import ContactList from './components/ContactsList/ContactsList';
import FilterContact from './components/FilterContact/FilterContact';
import './App.css';
import { connect } from "react-redux";
import { phonebookOperations } from './components/redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1 className='title'>PhoneBook</h1>
        <PhoneBook />
        <h2 className='title'>Contacts</h2>
        <FilterContact />
        <ContactList  />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(null, mapDispatchToProps)(App);
