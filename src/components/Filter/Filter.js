import React from 'react';
import { FormLabel } from '../form/contactForm.styled';
import PropTypes from 'prop-types';

const Filter = ({ filterData }) => {
  return (
    <FormLabel htmlFor="value">
      {' '}
      Find contact by name
      <input type="text" name="value" onChange={filterData} />
    </FormLabel>
  );
};

Filter.propTypes = {
  filterData: PropTypes.func,
};

export default Filter;
