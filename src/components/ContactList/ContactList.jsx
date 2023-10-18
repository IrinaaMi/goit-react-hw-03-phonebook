import React from "react";
import { ContactItem } from "components/ContactItem/ContactItem"
import { nanoid } from "nanoid";

export const ContactList = ({ contacts, onDeleteContact }) => (
    <ul>
        {contacts.map((contact) => (
            <ContactItem key={nanoid()} contact={contact} onDeleteContact={onDeleteContact} />
        ))}

    </ul>
)
