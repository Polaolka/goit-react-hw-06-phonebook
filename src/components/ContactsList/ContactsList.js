import React from 'react';
import css from '../ContactsList/ContactsList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { getContactFilter } from '../../redux/selectors';

export const ContactsList = () => {
  const filter = useSelector(getContactFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const visibleContacts = getVisibleContacts();

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
    toast.error('One contact has been deleted');
  };

  return (
    <ul className={css.listWrapper}>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <button
            type="button"
            className={css.button}
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
