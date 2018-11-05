import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Comments.css';

  class Comments extends Component {
  
      // handle change for input of comments
      handleChange = (event) => {
          console.log('running Handle Change', event.target.value);
          this.props.dispatch({
              type: 'ADD_COMMENTS',
              payload: {comments: event.target.value} 
          });
      }
  
      // handle on click, go to next page and dispatch support to state in index
      handleNextClick = (event) => {
          event.preventDefault();
          this.props.history.push('/5')
          this.postFeedback();
      }
  
      // POST feedback from index state to server
      postFeedback = () => {
          console.log('post feedback', this.props.reduxState.feedbackReducer);
          axios.post(`/feedback`, this.props.reduxState.feedbackReducer)
              .then((response) => {
                  console.log('after axios postFeedback', response);
              })
              .catch(function (error) {
                  console.log('error in postFeedback', error);
              });
      }
  
    render() {
      return (
        <Card id="card">
        <CardContent>
            <h3 id="cardHeader">4 of 4 pages</h3>
            <section>
                <h4>Any Comments you want to share?</h4>
            </section>
            <form onSubmit={this.handleNextClick}>
            <input onChange={this.handleChange} />
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
  
  
  export default connect(mapStateToProps)(Comments);
