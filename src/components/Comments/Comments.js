import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
class Comments extends Component {

    state = {
        comments: ''
    }

    // handel change for input of support
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
            ...this.state,
            comments: event.target.value
        });
        this.props.dispatch({
            type: 'ADD_COMMENTS',
            payload: this.state
        });
    }

    // handle on click, go to next page and dispatch support to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        this.props.history.push('/5')
        this.postFeedback();
    }

    // POST feedback from index state to server
    postFeedback = () => {
        console.log('post feedback', this.props.reduxState.feedbackReducer);
        axios.post(`/feedback`, this.props.reduxState.feedbackReducer)
            .then((response) => {
                console.log('after axios postFeedback', response);
            })
            .catch(function (error) {
                console.log('error in postFeedback', error);
            });
    }

  render() {
    return (
        <div>
            <h3>4 of 4 pages</h3>
            <section>
                <p>Any Comments you want to share?</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <input onChange={this.handleChange} value={this.state.comments} />
            <button type="submit">Submit!</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Comments);
