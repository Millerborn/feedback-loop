import React, { Component } from 'react';
import { connect } from 'react-redux';
class Understanding extends Component {
    
    state = {
        understanding: ''
    }

    // handel change for input of understanding
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
          ...this.state,
          understanding: event.target.value
        });
    }

    // handle on click, go to next page and dispatch understanding to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.understanding);
        this.props.dispatch( {type: 'ADD_UNDERSTANDING', payload: this.state} );
        this.props.history.push('/3')
    } 

  render() {
    return (
        <div>
            <h3>2 of 4 pages</h3>
            <section>
                <p>How well are you understanding the content?</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <input onChange={this.handleChange} value={this.state.understanding} />
            <button type="submit">Next</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Understanding);