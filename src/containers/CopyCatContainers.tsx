// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { CopyCat } from "../components/CopyCat";


export class CopyCatContainers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            copying: true,
            input:""
        };

        this.toggleTape = this.toggleTape.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ input: event.target.value });
    }

    toggleTape() {
        this.setState({ copying: !this.state.copying })
    }

    render() {
        return (
            <CopyCat 
            input={this.state.input}
            handleChange={this.handleChange}
            toggleTape={this.toggleTape} 
            copying={this.state.copying} />
        )
    }
}