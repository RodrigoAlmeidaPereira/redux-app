import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { clickButton } from './actions';
import './App.css';
import { Title } from './h1';

class App extends Component {
    state = {
       inputValue: ''
    };

    inputChange = (event) => {
        this.setState({
           inputValue: event.target.value
        });
    };

    render() {
        const { newValue, clickButton } = this.props;
        const { inputValue } = this.state;

        return (
            <form className="App" style={{ paddingTop: '10px' }}>
                <input type='text' value={inputValue} onChange={this.inputChange}/>
                <button type='button' onClick={() => clickButton(inputValue)} >Submit me!</button>

                <Title data={newValue}/>
            </form>
        )
    }

}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch => bindActionCreators({clickButton}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);