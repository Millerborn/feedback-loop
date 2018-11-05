import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Understanding';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Understanding.css';

class Understanding extends Component {
    
    state = {
        understanding: ''
    }

    // handle change for input of understanding
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
        <Card id="card">
            <CardContent>
                <h3 id="cardHeader">2 of 4 pages</h3>
                <section>
                    <h4>How well are you understanding the content?</h4>
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


export default connect(mapStateToProps)(Understanding);