import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingFeedback extends Component {
    
    state = {
        feeling: ''
    }

    handleChange = (id, feeling) => {
        console.log('running Handle Change');
        this.setState({
          feedback: [{
              id: id,
          }],
          feeling: feeling
        });
        console.log(this.state);
      }
 
  render() {
    return (
        <div>
            <section>
                <p>How are you feeling today?</p>
                <input onChange={this.handleChange} value={this.state.feeling}/>
            </section>
            <section>
            <button id="addButton" onClick={this.props.onSubmit}>Next</button>
            </section>
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(FeelingFeedback);
