import React from 'react';
import css from '../Filter/Filter.module.css';

import { useSelector } from "react-redux";
import { getContactFilter } from "../../redux/selectors";
import { useDispatch } from "react-redux";
import { setContactFilter } from "../../redux/filterSlice";
import { getContacts } from "../../redux/selectors";

export const Filter = () => {
  
  const filter = useSelector(getContactFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const total = contacts.length;

  const changeFilter = e => {
    dispatch(setContactFilter(e.currentTarget.value.toLowerCase()));
  };

  
  return (
  <form className={css.form}>
    <div>
      <p className={css.count}>Total contacts: <span className={css.number}>{total}</span></p>
    </div>
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={changeFilter}
      />
    </label>
  </form>
);}
