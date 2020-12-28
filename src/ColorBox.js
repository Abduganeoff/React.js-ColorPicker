import React, { Component } from 'react'
import Color from './Color';
import './ColorBox.css';

class ColorBox extends Component {
    static defaultProps = {
        colors: 
            [
                'aqua', 'wheat', 'red', 'chocolate',
                'purple', 'peru', 'pink', 'teal', 'indigo',
                'green', 'grey', 'black', 'magenta'
            ]
    };

    render() {
        const colorBox = this.props.colors.map(c => <Color colors={this.props.colors}/>)
        return(
            <div className="ColorBox">
                {colorBox}
            </div>
        );
    }
}

export default ColorBox;