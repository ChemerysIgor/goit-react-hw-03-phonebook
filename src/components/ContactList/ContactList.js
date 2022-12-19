import React from 'react';
import { List, ContactCard } from './ContactList.styled';
import PropTypes, { shape } from 'prop-types';

const ContactList = ({ contactArr, deleteContact }) => {
  return (
    <>
      <List>
        {contactArr.map(contact => {
          const { id, name, number } = contact;

          return (
            <ContactCard key={id}>
              {' '}
              {name}: {number}
              <button
                type="button"
                onClick={() => {
                  deleteContact(id);
                }}
              >
                Delete
              </button>
            </ContactCard>
          );
        })}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contactArr: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
