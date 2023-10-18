import React from "react";
import styles from './ContactForm.module.css'
export class ContactForm extends React.Component {
    state = {
        name: '',
        number: ''
    }
    changeInput = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        })
    }
    formSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.reset();
    };
    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    };
    render() {
        return (
            <form onSubmit={this.formSubmit} >
                <label className={styles.label}>
                    Name
                    <input className={styles.input} type="text" name="name" required value={this.state.name}
                        onChange={this.changeInput} />
                </label>
                <label className={styles.label}>
                    Number
                    <input className={styles.input} type="tel" name="number" required value={this.state.number}
                        onChange={this.changeInput} />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}