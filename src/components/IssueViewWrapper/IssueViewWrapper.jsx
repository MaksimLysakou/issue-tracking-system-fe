import React, {PureComponent} from 'react';
import './style.css';

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
