import React, {PureComponent} from 'react';
import './style.css';
import {Link} from 'react-router-dom';

class LoginPage extends PureComponent{
    render() {
        return (
            <div className="login-page">
                <h2 className="login-page__title">Вход в систему</h2>
                <Link className="login-page__link" to="register">Создать аккаунт</Link>
                <div className="login-page__input">
                    <span>Электронная почта(имя пользователя)</span>
                    <input className="login-page__input"/>
                </div>
                <div className="login-page__input">
                    <span>Пароль</span>
                    <input className="login-page__input" type="password"/>
                </div>
                <button className="login-page__button"> LogIn </button>
            </div>
        );
    }

}

export default LoginPage;