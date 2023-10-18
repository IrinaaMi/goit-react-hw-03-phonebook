import React from "react";
import styles from './ContactItem.module.css'
export function ContactItem({ contact, onDeleteContact }) {
   return <>
      <li key={contact.id} className={styles.contactItem}>
         <p> {contact.name}: {contact.number}</p>
         <button className={styles.button} onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </li>
   </>
}




