import React, { Component } from 'react';
import { connect } from 'react-redux';


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
        }
    
        // handle on click to go to next page and dispatch support to state in index
        handleNextClick = (event) => {
            event.preventDefault();
            console.log('in handel click push', this.state.comments);
            this.props.dispatch( {type: 'ADD_COMMENTS', payload: this.state} );
            this.props.history.push('/5')
        }

  render() {
    return (
        <div>
            <section>
                <p>Any Comments you want to share?</p>
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


export default connect(mapStateToProps)(Comments);
