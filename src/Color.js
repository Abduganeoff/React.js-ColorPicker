import React, { Component } from 'react'
import {choice} from './helpers';
import './Color.css';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.colors)
        }
    }

    handleClick = () => {
        let newStyle;
        do {
            newStyle = choice(this.props.colors)
        } while( newStyle === this.state.color);
        

        this.setState(currState => ({
            color: newStyle
        }));
    }

    render() {
        return(
            <div className="Color" style={{backgroundColor: this.state.color}} onClick={this.handleClick}>
            </div>
        );
    }
}

export default Color;