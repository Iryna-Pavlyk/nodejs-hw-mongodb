import { Contact } from '../db/models/contacts.js';

export const getAllContacts = () => Contact.find();

export const getContactById = (contactId) => Contact.findById(contactId);

export const createContact = (data) => Contact.create(data);

export const updateContact = async (contactId, data, options = {}) => {
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, data, {
    ...options,
  });

  return {
    contact: result.value,
  };
};

export const deleteContact = (contactId) =>
  Contact.findOneAndDelete({ _id: contactId });
