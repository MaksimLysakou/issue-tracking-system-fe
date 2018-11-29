import React, {PureComponent} from 'react';
//import PropTypes from 'prop-types';

class LoginPage extends PureComponent{
   /* static propTypes = {
        name: PropTypes.string,
    };*/

    /*static defaultProps = {
        name: 'world',
    };*/
    render() {
        return (
            <div>
                <h2 className="LoginPage">LoginPage</h2>
                <input className="LoginInput"/>
                <input className="PasswordInput"/>
                <button className="LoginButton"> LogIn </button>
            </div>
        );
    }

}

export default LoginPage;