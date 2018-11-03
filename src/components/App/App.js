import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Header from '../Header/Header';
import { connect } from 'react-redux';
import FeelingFeedback from '../FeelingFeedback/FeelingFeedback';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import AdminView from '../AdminView/AdminView';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {

  getFeedback = () => {
    // GET Feedback from the server
    axios.get('/feedback') 
      .then( (response) => {
          console.log('getting feedback from server');
          
        this.props.dispatch( {type: 'GET_FEEDBACK', payload: response.data} );
      })
      .catch( (error) => {
        alert('error in getFeedback');
      })  
    }

    onSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      axios({
        method: 'POST',
        url: '/feedback',
        data: { newElement: this.state }
      })
      .then( (response) => {
        this.getElements();
        this.clearInputs();
      })
      .catch( (error) => {
        alert('Error onSubmit')
      })
    }


  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path="/" component={FeelingFeedback} />
            <Route path="/2" component={Understanding} />
            <Route path="/3" component={Support} />
            <Route path="/4" component={Comments} />
            <Route path="/5" component={ThankYou} />
            <Route path="/admin" component={AdminView} />
          {/* <section>
          <h2>All Feedback</h2>
          <ul>
            {this.props.reduxState.feedbackReducer.map(
              feedback => <li key={feedback.id}>{feedback.comments}</li>
            )}
          </ul>
          </section> */}
          
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(App);
