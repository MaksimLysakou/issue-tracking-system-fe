import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';
import {Link} from 'react-router-dom';

class LoginPage extends PureComponent{
    onLogIn() {
        const logInData = {
            email: this.email.value,
            password: this.password.value,
        };
        this.props.makeLogInRequest(logInData);
    }
    render() {
        return (
            <div className="login-page">
                <h2 className="login-page__title">Вход в систему</h2>
                <Link className="login-page__link" to="register">Создать аккаунт</Link>
                <div className="login-page__input">
                    <span>Электронная почта(имя пользователя)</span>
                    <input className="login-page__input-text" ref={(ref) => {this.email = ref;}}/>
                </div>
                <div className="login-page__input">
                    <span>Пароль</span>
                    <input className="login-page__input-text" type="password" ref={(ref) => {this.password = ref;}} />
                </div>
                <button className="login-page__button" onClick={() => { this.onLogIn()} } > LogIn </button>
            </div>
        );
    }

}

LoginPage.propTypes = {
    makeLogInRequest: propTypes.func.isRequired,
};

export default LoginPage;
