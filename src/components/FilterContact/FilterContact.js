import React from "react";
import { connect } from "react-redux";
import styles from './FilterContact.module.css';
import { phonebookActions, phonebookSelector } from '../redux/phonebook';


const FilterContact = ({ value, onChange }) => (
    <div className={styles.section}>
        <label className={styles.lable}>
            Finde contact by name
            <br />
            <input type='text' value={value} onChange={onChange} className={styles.filters} />
        </label>
    </div>
);

const mapStateToProps = state => ({
    value: phonebookSelector.getValue(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: (event) => dispatch(phonebookActions.changeFilter(event.target.value))
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterContact)