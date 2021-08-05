import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';
import { connect } from 'react-redux';
import { phonebookSelector, phonebookOperations } from '../redux/phonebook';

const ContactList = ({ contactList, onDeleteContact }) => (
    <>
        <ul className={styles.list}>
            {contactList.map(({ name, number, id }) => (
                <li key={id} className={styles.item}>                   
                    {name}: {number}{' '}
                    <button onClick={() => onDeleteContact(id)} className={styles.btn}>Delete</button>
                </li>
            ))}
        </ul>
    </>
)
ContactList.propTypes = {
    contactList: PropTypes.array.isRequired
}

// const getVisibleContact = ( allContacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
// }
  
const mapStateToProps = (state) => ({
    contactList: phonebookSelector.getVisibleContact(state)
});

const mapDispatchToProps = dispatch => ({
    onDeleteContact: id => dispatch(phonebookOperations.deletedContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);