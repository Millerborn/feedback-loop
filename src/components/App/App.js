import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
// import { HashRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount(){
    this.getFeedback();
  }

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



  render() {
    return (
      // <Router>
        <div className="App">
          <Header />
          {/* <nav>
            <ul>
              <li><Link to="/">Page 1</Link></li>
              <li><Link to="/2">Page 2</Link></li>
              <li><Link to="/3">Page 3</Link></li>
              <li><Link to="/4">Page 4</Link></li>
              <li><Link to="/AdminView">Admin View</Link></li>
            </ul>
          </nav>
          <section>
            <Route exact path="/" component={this.getFeedback} />
            <Route path="/2" component={CustomerInfo} />
            <Route path="/3" component={Checkout} />
            <Route path="/4" component={Checkout} />
            <Route path="/AdminView" component={AdminView} />
          </section> */}
          <section>
          <h2>All Feedback</h2>
          <ul>
            {this.props.reduxState.feedbackReducer.map(
              feedback => <li key={feedback.id}>{feedback.comments}</li>
            )}
          </ul>
          </section>

        </div>
      // </Router>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(App);
