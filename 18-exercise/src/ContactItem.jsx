import React, { useContext } from "react";
import FormContext from "./FormContext";

export const ContactItem = ({ contact, setEditingContact }) => {
  const { dispatch } = useContext(FormContext);

  return (
    <li>
      <strong>
        {contact.name} {contact.favorite && "⭐"}
      </strong>

      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>

      <button
        onClick={() =>
          dispatch({ type: "toggleFavorite", payload: contact.id })
        }
      >
        {contact.favorite ? "Unfavorite" : "Favorite"}
      </button>

      <button onClick={() => setEditingContact(contact)}>
        Edit
      </button>

      <button
        onClick={() =>
          dispatch({ type: "delete", payload: contact.id })
        }
      >
        Delete
      </button>
    </li>
  );
};