import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {

  render() {
    return (
        <div className="App">

        </div>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Understanding);
