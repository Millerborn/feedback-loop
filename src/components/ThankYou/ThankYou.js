import React, {Component} from 'react';
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


// console.log('in ThankYou');
class ThankYou extends Component {
  
    ///On submit button this function is sending the new feedback 
    ///at reduxState and POSTing it.
    completeFeedback = (props) => {
        console.log('new feedback', this.props.reduxState.feedbackReducer );
        // this.props.dispatch({ type: 'ADD_THANKYOU', payload: this.state});
        this.props.history.push('/');
        let newFeedback = this.props.reduxState.feedbackReducer;
        axios({
            method: 'POST',
            url: '/feedback',
            data: newFeedback,
        })
        .then((response) => {
            console.log('sending new feedback to DB', response);
            
        })
        .catch((error) => {
            console.log('error is POST on ThankYou.js', error);
            
        })

    }
    
      render() {
    
        return (
            
         <Card > 
             <CardContent className="submitButton">
                 <CardActions>
                    <Button onClick={this.completeFeedback} variant="outlined" color="primary" type="button" value="HOME">Send Feedback</Button>
                </CardActions>
            </CardContent>
                <br></br>
            <CardContent>
                <Typography color="textSecondary" component="h2" variant="h5">Thanks for your Feedback!</Typography>                
            </CardContent>
         </Card>  
        )
      }
  }
  
  const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

  export default connect(mapReduxStateToProps)(ThankYou);