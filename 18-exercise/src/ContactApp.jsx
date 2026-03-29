import React, { useReducer, useState } from "react";
import FormContext from "./FormContext";
import { reducer, initialState } from "./reducer";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";

export const ContactApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editingContact, setEditingContact] = useState(null);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <h2>Contact Management App</h2>

      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList
        contacts={state}
        setEditingContact={setEditingContact}
      />
    </FormContext.Provider>
  );
};