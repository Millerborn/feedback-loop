import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
    
    state = {
        support: ''
    }

    // handel change for input of support
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
          ...this.state,
          support: event.target.value
        });
    }

    // handle on click to go to next page and dispatch support to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.support);
        this.props.dispatch( {type: 'ADD_SUPPORT', payload: this.state} );
        this.props.history.push('/4')
    } 

  render() {
    return (
        <div>
            <section>
                <p>How well are you being supported?</p>
            </section>
            <form onSubmit={this.handleNextClick}>
            <input onChange={this.handleChange} value={this.state.support} />
            <button type="submit">Next</button>
            </form>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Support);
 