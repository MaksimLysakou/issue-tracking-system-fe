import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {Link} from 'react-router-dom';

class RegistrationPage extends PureComponent{
    onRegistration() {
        const userToCreate = {
            firstName: this.firstName.value,
            secondName: this.secondName.value,
            email: this.email.value,
            password: this.password.value,
        };
        this.props.onRegistration(userToCreate);
    }

    render() {
        return (
            <div className="registration-page">
                <h2 className="registration-page__title">Создать аккаунт</h2>
                <Link className="login-page__link" to="login">Войдите в свой аккаунт</Link>
                <div className="registration-page__input">
                    <span>Имя</span>
                    <input className="registration-page__input" ref = { ref => this.firstName = ref }/>
                </div>
                <div className="registration-page__input">
                    <span> Фамилия </span>
                    <input className="registration-page__input" ref = { ref => this.secondName = ref }/>
                </div>
                <div className="registration-page__input">
                    <span>Электронная почта</span>
                    <input className="registration-page__input" ref = { ref => this.email = ref }/>
                </div>
                <div className="registration-page__input">
                    <span>Пароль</span>
                    <input className="login-page__input" type="password" ref = { ref=> this.password = ref }/>
                </div>
                <button className="registration-page__button" onClick={ ( ) => {this.onRegistration()} }>Создать новый аккаунт</button>
            </div>
        );
    }
}

RegistrationPage.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};

export default RegistrationPage;
