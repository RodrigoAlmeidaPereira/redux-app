import React, { Component } from 'react';
import { Paragraph }  from './paragraph';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Fiap',
            data: '2019-06-26',
            number: {
                prop: 200
            }
        };

        this.updateState = this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateState() {
        this.setState({name: 'Rodrigo'});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    render() {
        return (
            <form className="App" style={{ paddingTop: '10px' }}>
                <input type='text' value={this.state.name} onChange={this.handleChange}/>

                <button type='submit' onSubmit={() => this.handleSubmit()}>Submit me!</button>
                <button onClick={this.updateState}>Click me!</button>

                <h1>{ this.state.data }</h1>
                <Paragraph text={this.state.number.prop}/>
                <Paragraph text={this.state.name}/>
            </form>
        )
    }

}
export default App;