import React, { Component } from 'react';
import { connect } from 'react-redux';
class ThankYou extends Component {

    // handle click to leave new feedback
    handleNextClick = (event) => {
        event.preventDefault();
        this.props.history.push('/')
    } 

  render() {
    return (
        <div>
            <section>
                <p>Thank You!</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <button type="submit">Leave New Feedback</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(ThankYou);
