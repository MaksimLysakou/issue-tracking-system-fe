import React, { PureComponent } from 'react';
import propTypes from 'prop-types';
import './style.css';
import ColumnContainer from '../../containers/Column/Column'

class BoardPageView extends PureComponent {
    renderColumnArray(){
        return this.props.data.map(data => (
            <ColumnContainer
                column_name={data.column_name}
                column_id={data.column_id}
            />
        ))
    }
    render(){
        return(
            <div className="board-column">
                {this.renderColumnArray()}
            </div>
        )
    }
}

BoardPageView.propTypes = {
    data: propTypes.array.isRequired,
};

export default BoardPageView;
