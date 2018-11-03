import React, { Component } from 'react';
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
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 

export default connect(mapStateToProps)(App);
