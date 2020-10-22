import { combineReducers } from "redux";
import contactActions from "./contactsActions";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [contactActions.addContact]: (state, action) => [
    ...state,
    action.payload.contact,
  ],
  [contactActions.removeContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case contactActions.addContact.type:
//       return [...state, payload.contact];
//     case contactActions.removeContact.type:
//       return state.filter((contact) => contact.id !== payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer("", {
  [contactActions.onChangeFilter]: (state, action) => action.payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactActions.onChangeFilter.type:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({ items, filter });
