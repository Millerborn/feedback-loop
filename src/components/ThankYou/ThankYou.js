import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class ThankYou extends Component {

    // handle on click to go to / to leave new feedback
    handleNextClick = (event) => {
        event.preventDefault();
        this.postFeedback();
        this.props.history.push('/')
    } 

    // POST feedback from index state to server
    postFeedback = () => {
        console.log('post feedback', this.props.reduxState.feedbackReducer);
        axios.post(`/feedback`, this.props.reduxState.feedbackReducer)
        .then( (response) => {
            console.log('after axios postFeedback',response);
        })
        .catch(function (error) {
            console.log('error in postFeedback',error);
        });
    }

  render() {
    return (
        <div>
            <section>
                <p>Thank You!</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <button type="submit">Submit New Feedback</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(ThankYou);
