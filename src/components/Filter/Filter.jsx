import React from "react";
import styles from './Filter.module.css'

export const Filter = ({ value, onChange }) => (
    <label className={styles.label}>Find contacts by name
        <input type="text" value={value} onChange={onChange} className={styles.input}></input>
    </label>
);