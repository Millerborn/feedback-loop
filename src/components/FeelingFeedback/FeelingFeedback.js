import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingFeedback extends Component {
    
    state = {
        feeling: ''
    }

    // handel change for input of feeling
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
          ...this.state,
          feeling: event.target.value
        });
    }

    // handle on click to go to next page and dispatch feeling to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.feeling);
        this.props.dispatch( {type: 'ADD_FEELING', payload: this.state} );
        this.props.history.push('/2')
    } 

  render() {
    return (
        <div>
            <section>
                <p>How are you feeling today?</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <input onChange={this.handleChange} value={this.state.feeling} />
            <button type="submit">Next</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(FeelingFeedback);
