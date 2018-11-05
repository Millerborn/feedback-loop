import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Support.css';

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

    // handle on click, to go to next page and dispatch support to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.support);
        this.props.dispatch( {type: 'ADD_SUPPORT', payload: this.state} );
        this.props.history.push('/4')
    } 
    
render() {
    return (
        <Card id="card">
            <CardContent>
                <h3 id="cardHeader">3 of 4 pages</h3>
                <section>
                    <h4>How well are you being supported?</h4>
                </section>
                <form onSubmit={this.handleNextClick}>
                <input onChange={this.handleChange} value={this.state.feeling} />
                <CardActions>
                <Button id="button" size="small" type="submit">Next</Button>
                </CardActions>
                </form>
            </CardContent>
        </Card>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(Support);
 