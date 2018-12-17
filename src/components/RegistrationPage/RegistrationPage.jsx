import React, {PureComponent} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class RegistrationPage extends PureComponent{
    render() {
        return (
            <div className="registration-page">
                <h2 className="registration-page__title">Создать аккаунт</h2>
                <Link className="login-page__link" to="login">войдите в свой аккаунт</Link>
                <div className="registration-page__input">
                    <span>Имя</span>
                    <input className="registration-page__input"/>
                </div>
                <div className="registration-page__input">
                    <span>Электронная почта</span>
                    <input className="registration-page__input"/>
                </div>
                <div className="registration-page__input">
                    <span>Пароль</span>
                    <input className="login-page__input" type="password"/>
                </div>
                <button className="registration-page__button">Создать новый аккаунт</button>
            </div>
        );
    }

}

export default RegistrationPage;