// @ts-nocheck
import React from 'react';
import {styles} from '../styles'
import PropTypes from 'prop-types'

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        const copying = this.props.copying;
        const toggleTape = this.props.toggleTape
        const myInput = this.props.input
        const handleChange = this.props.handleChange

        return (
            <div style={styles.divStyles}>
                <h1 style={{marginBottom: 80}}>Copy Cat {myInput !== "" ? myInput:"Tom" }</h1>
                <input type="text" value={myInput}onChange={handleChange}/>
                <p>{copying ? myInput : ''}</p>
                <img
                    alt='cat'
                    src={copying ? images.copycat : images.quietcat}
                    onClick={toggleTape}
                />
            </div>
        );
    };
}

CopyCat.propTypes = {
    input: PropTypes.string.isRequired,
    copying: PropTypes.bool.isRequired,
    toggleTape: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}