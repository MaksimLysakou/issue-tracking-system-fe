import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';
import IssueView from "../IssueView/IssueView";

class IssueViewWrapper extends PureComponent{
    constructor(props){
        super(props);
        this.state = {shouldRender:false}
    }

    render(){
        if (this.props.shouldRender === false){
            return(null)
        }

        else{
            return(
                <div className="IssueViewWrapper"> {this.props.children} </div>
            )
        }
    }
}

export default IssueViewWrapper
