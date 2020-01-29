// Code ClickityClick Component Here
import React, { Component } from 'react'

class ClickityClick extends Component {

    constructor() {
        super()
        // Define the initial state:
        this.state = {
            hasBeenClicked: false,
        }
    }

    // toggle state between true and false repeatedly
    // when handleClick is called, setState will update the state so that toggle is reversed
    handleClick = () => {
        // Update state here
        this.setState(previousState => {
            return {
                hasBeenClicked: !previousState.hasBeenClicked
            }
        })
    }

    render() {
        return (
            <div>
            <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
            <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

}

export default ClickityClick