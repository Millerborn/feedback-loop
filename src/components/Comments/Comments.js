import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

    handleNextClick = () => {
        // this.props.dispatch( {type: 'ADD_FEELING', payload: this.state} );
        this.props.history.push('/5')
    }

  render() {
    return (
        <div className="App">
            <section>
                <p>Any Comments you want to leave?</p>
                <input />
            </section>
            <section>
            <button onClick={this.handleNextClick}>Next</button>
            </section>        
        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Understanding);

 // postFeedback = () => {
    //     console.log('post feedback', this.state.feeling);
    //     axios.post(`/feedback`, this.state.feeling)
    //     .then( (response) => {
    //       console.log('after axios post',response);
    //     })
    //     .catch(function (error) {
    //       console.log('error in post',error);
    //     });
    //    }
