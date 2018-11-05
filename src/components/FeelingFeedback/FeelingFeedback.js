import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './FeelingFeedback.css';

class FeelingFeedback extends Component {
    
    state = {
        feeling: ''
    }

    // handle change for input of feeling
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
          ...this.state,
          feeling: event.target.value
        });
    }

    // handle on click, go to next page and dispatch feeling to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.feeling);
        this.props.dispatch( {type: 'ADD_FEELING', payload: this.state} );
        this.props.history.push('/2')
    } 

  render() {
    return (
        <Card id="card">
            <CardContent>
                <h3 id="cardHeader">1 of 4 pages</h3>
                <section>
                    <h4>How are you feeling today?</h4>
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


export default connect(mapStateToProps)(FeelingFeedback);
