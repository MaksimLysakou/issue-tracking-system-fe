import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
/*import {Link} from 'react-router-dom';*/

class BacklogPage extends PureComponent {
    renderBacklogArray(){
        return this.props.data.map(data => (
            <div className= "backlog__backlog-issue">
                <button key = { data._id } className = "backlog-issue__button">{ data.issue_name }</button>
            </div>
        ))
    }
    render(){
        return(
            <div className="backlog">
                {this.renderBacklogArray()}
            </div>
        )
    }
}

BacklogPage.propTypes = {
    data: propTypes.array.isRequired,
};

export default BacklogPage
