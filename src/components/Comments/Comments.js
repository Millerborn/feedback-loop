import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

// import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './Comments.css';

class Comments extends Component {
    
    state = {
        comments: ''
    }

    // handel change for input of comment
    handleChange = (event) => {
        console.log('running Handle Change', event.target.value);
        this.setState({
          ...this.state,
          comments: event.target.value
        });
    }

    // handle on click, go to next page and dispatch feeling to state in index
    handleNextClick = (event) => {
        event.preventDefault();
        console.log('in handel click push', this.state.comments);
        this.props.history.push('/5')
        this.props.dispatch( {type: 'ADD_COMMENTS', payload: this.state} );
        this.postFeedback();
    } 

    // POST feedback from index state to server
    postFeedback = () => {
        console.log('post feedbackRouter :', this.props.reduxState.feedbackRouter);
        axios({
          method: 'POST',
          url: (`/feedback`, this.props.reduxState.feedbackRouter),
          data: this.state
        })
        .then( ( response ) => {
            console.log('response', response);            
        })
        .catch( (error) => {
          alert('error!', error);
        })
      }
    // postFeedback = () => {
    //     console.log('post feedback', this.props.reduxState.feedbackReducer);
    //     axios.post(`/feedback`, this.props.reduxState.feedbackReducer)
    //         .then((response) => {
    //             console.log('after axios postFeedback', response);
    //         })
    //         .catch(function (error) {
    //             console.log('error in postFeedback', error);
    //         });
    // }

  render() {
    return (
        <Card id="card">
            <CardContent>
                <h3 id="cardHeader">4 of 4 pages</h3>
                <section>
                    <h4>Any Comments you want to share?</h4>
                </section>
                <form onSubmit={this.handleNextClick}>
                <input onChange={this.handleChange} value={this.state.comments} />
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



// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import axios from 'axios';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import './Comments.css';
// class Comments extends Component {

//     state = {
//         comments: ''
//     }

//     // handel change for input of support
//     handleChange = (event) => {
//         console.log('Handle Change value:', this.state);
//         this.setState({
//             ...this.state,
//             comments: event.target.value
//         });
//         this.props.dispatch({            
//             type: 'ADD_COMMENTS',
//             payload: this.state
//         });
//     }

//     // handle on click, go to next page and dispatch support to state in index
//     handleNextClick = (event) => {
//         event.preventDefault();
//         this.props.history.push('/5')
//         this.postFeedback();
//     }

//     // POST feedback from index state to server
//     postFeedback = () => {
//         console.log('post feedback', this.props.reduxState.feedbackReducer);
//         axios.post(`/feedback`, this.props.reduxState.feedbackReducer)
//             .then((response) => {
//                 console.log('after axios postFeedback', response);
//             })
//             .catch(function (error) {
//                 console.log('error in postFeedback', error);
//             });
//     }

// render() {
//     return (
//         <Card id="card">
//             <CardContent>
//                 <h3 id="cardHeader">4 of 4 pages</h3>
//                 <section>
//                     <h4>Any Comments you want to share?</h4>
//                 </section>
//                 <form onSubmit={this.handleNextClick}>
//                 <input onChange={this.handleChange} value={this.state.comments} />
//                 <CardActions>
//                 <Button id="button" size="small" type="submit">Next</Button>
//                 </CardActions>
//                 </form>
//             </CardContent>
//         </Card>
//     );
//   }
// }

// const mapStateToProps = ( reduxState ) => ( { reduxState } ); 


// export default connect(mapStateToProps)(Comments);
