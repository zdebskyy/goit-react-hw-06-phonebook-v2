import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    contact: { id: uuidv4(), name, number },
  },
}));

// const addContact = ({ name, number }) => ({
//   type: "contact/add",
//   payload: { contact: { id: uuidv4(), name, number } },
// });

const removeContact = createAction("contact/remove");

// const removeContact = (contactId) => ({
//   type: "contact/remove",
//   payload: { contactId },
// });

const onChangeFilter = createAction("contact/filter");

// const onChangeFilter = (filter) => ({
//   type: "contact/filter",
//   payload: { filter },
// });

export default {
  addContact,
  removeContact,
  onChangeFilter,
};
