import React, {PureComponent} from 'react';
import './style.css';
import {Link} from 'react-router-dom';


class Page404 extends PureComponent{

    render() {
        return (
            <div className= "head404">
                <div className= "head">
                     <span>ERROR 404</span>
                     <p><span>Данная страница не существует для перехода на глувную страницу нажмите </span>
                     <Link className= "login-page__link" to="q" >сюда</Link></p>

                </div>
    
             </div>
        );
    }

}

export default Page404;
