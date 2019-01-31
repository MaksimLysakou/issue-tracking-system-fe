import React, {PureComponent} from 'react';
import propTypes from 'prop-types';
import './style.css';

class IssueViewWrapper extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            shouldRender:this.props.shouldRender
        }
    }

    componentWillReceiveProps(nextprops){
        if(nextprops.shouldRender!==this.props.shouldRender){
            this.setState({shouldRender:nextprops.shouldRender})
        }
    }

    render(){
        if (this.state.shouldRender === false){
            return(null)
        }
        else{
            return(
                <div
                    className="IssueViewWrapper"
                    onClick={()=>{
                        this.props.onClickOutside()
                    }}
                >
                    <div
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                    >
                        {this.props.children}
                    </div>
                </div>
            )
        }
    }
}
IssueViewWrapper.defaultProps ={
    shouldRender:false,
}

IssueViewWrapper.propTypes ={
    shouldRender:propTypes.boolean,
    onClickOutside:propTypes.func.isRequired,
}
export default IssueViewWrapper
