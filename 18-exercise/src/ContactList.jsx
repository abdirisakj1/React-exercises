import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ contacts, setEditingContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          setEditingContact={setEditingContact}
        />
      ))}
    </ul>
  );
};