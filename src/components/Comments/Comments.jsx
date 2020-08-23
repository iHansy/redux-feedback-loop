import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    //checking store values
    componentDidMount() {
        console.log(this.props.reduxStore);
    }

    state = {
        comments: ''
    }

    commentsInput = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    commentsNextBtn = () => {
        console.log(this.state);
        this.props.dispatch({ type: 'SET_COMMENTS', payload: this.state.comments})
        this.props.history.push('/review')
    }

    commentsBackBtn = () => {
        console.log('going back...');
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h2>Any comments you would like to add?</h2>
                {/* cool thing I found! First time using the textarea element, super sweet. */}
                <textarea
                    name="message" rows="7" cols="35"
                    placeholder="leaving a comment is optional"
                    onChange={this.commentsInput}
                />
                <button onClick={this.commentsNextBtn}>Next</button>
                <button onClick={this.commentsBackBtn}>Back</button>
            </div>
        )
    }
}

//not using store props
const mapStateToProps = (reduxStore) => {
    return {
        reduxStore
    }
}

export default connect(mapStateToProps)(Comments);