import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Material-UI
import { Button, Card } from '@material-ui/core';

class Admin extends Component {

    state = {
        newElement: 'testing'
      }

    componentDidMount() {
        console.log('admin page loaded...')
        this.adminGetFeedback();
        console.log(this.state);
    }

    // getting feedback history from database
    adminGetFeedback = () => {
        axios.get('/api/feedback').then((response) => {
            console.log('feedback:', response.data); // should be feedback history
            // dispatching to redux , sending list over there
            this.props.dispatch({ type: 'SET_FEEDBACK', payload: response.data })
        }).catch((error) => {
            console.log('error getting feedback from database', error);
        })
    }



    render() {
        return (
            <div>
                <h1> ADMIN PAGE!</h1>
                {this.props.reduxStore.feedbackHistoryReducer.map((feedback, index) => {
                    return (
                        <p>{feedback.feeling}</p>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Admin);