import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = { //initial state setup
        feeling: ''
    }

    //input function
    feelingInput = (event) => {
        this.setState({
            feeling: event.target.value
        })
    }

    //next button function
    feelingNextBtn = () => {
        console.log(this.state);
        const feelingScore = this.state.feeling
        if (feelingScore === '' || feelingScore < 1 || feelingScore > 5) {
            alert('Please fill in a number 1-5.')
            return
        }
        this.props.dispatch({ type: 'SET_FEELING', payload: this.state.feeling }) //dispatching to redux reducer
        this.props.history.push('/understanding') //navigating to understanding page
    }

    render() {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>1 = really struggling </p>
                <p>5 = feeling amazing</p>
                {/* <form></form> */}
                <input type="number" required placeholder="enter number" onChange={this.feelingInput} />
                <button onClick={this.feelingNextBtn}>Next</button>
            </div>
        )
    }
}

//not using store props here
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Feeling);