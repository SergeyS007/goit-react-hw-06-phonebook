import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContact } from 'redux/filterSlice';
import css from '../Filter/Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    console.log(e.currentTarget.value);
    dispatch(filterContact(e.currentTarget.value));
  };

  return (
    <label className={css.filter_label}>
      Find contacts by name
      <input
        className={css.filter_input}
        type="text"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;
