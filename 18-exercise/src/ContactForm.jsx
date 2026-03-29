import React, { useState, useEffect } from "react";

  export const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {

  const [contact, setContact] = useState({
    id: null,
    name: "",
    email: "",
    phone: ""
  }); 

  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  const handleAddContact = () => {
    if (contact.name.trim() && contact.email.trim() && contact.phone.trim()) {

      if (editingContact) {
        dispatch({
          type: "edit",
          payload: {
            id: editingContact.id,
            updatedData: contact
          }
        });
        setEditingContact(null);
      } else {
        dispatch({
          type: "add",
          payload: {
            ...contact,
            id: Date.now(),
            favorite: false
          }
        });
      }

      setContact({ id: null, name: "", email: "", phone: "" });
    }
  };

  return (
    <div>
      <h3>{editingContact ? "Edit Contact" : "Add New Contact"}</h3>

      <input
        type="text"
        placeholder="Name"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
      /> <br />

      <input
        type="email"
        placeholder="Email"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
      /> <br />

      <input
        type="number"
        placeholder="Phone"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
      /> <br />

      <button onClick={handleAddContact}>
        {editingContact ? "Update" : "Add"}
      </button>
      {editingContact && <button onClick={() => {setEditingContact(null)
        setContact({ id: null, name: "", email: "", phone: "" });

      } }>Cancel</button>}
    </div>
  );
}



