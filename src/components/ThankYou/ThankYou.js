import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ThankYou';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './ThankYou.css';
class ThankYou extends Component {

    // handle click to leave new feedback
    handleNextClick = (event) => {
        event.preventDefault();
        this.props.history.push('/')
    } 

//   render() {
//     return (
//         <div>
//             <section>
//                 <p>Thank You!</p>
//             </section>
//             <form onSubmit={this.handleNextClick}>
//             <button type="submit">Leave New Feedback</button>
//             </form>
//         </div>
//     );
//   }
// }

render() {
    return (
        <Card id="card">
            <CardContent>
                <section>
                    <h4>Thank You!</h4>
                </section>
                <form onSubmit={this.handleNextClick}>
                <CardActions>
                <Button id="button" size="small" type="submit">Leave New Feedback</Button>
                </CardActions>
                </form>
            </CardContent>
        </Card>
    );
  }
}

const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


export default connect(mapStateToProps)(ThankYou);
