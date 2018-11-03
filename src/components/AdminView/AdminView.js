import React, { Component } from 'react';
import axios from 'axios';
import './AdminView.css';
import { connect } from 'react-redux';


class AdminView extends Component {
state = {
    feedback: [],
}
    getFeedback = () => {
        axios.get('/feedback')
        .then((response) => {
            console.log('The feedback has been received!', response.data);
            const feedback = response.data;
            this.setState({feedback});
        }).catch((error) => {
            alert('Unable to GET all orders!', error);
        })
    }

    componentDidMount() {
        this.getFeedback();
    }

    deleteFeedback = (id) => {
        // call axios
        axios({
          method: 'DELETE',
          url: `/feedback/${id}`
        })
        .then( (response) => {
            console.log('Feedback deleted', response);
            this.getFeedback();
        })
        .catch( (error) => {
          alert('Error in deleteFeedback', error);
        })
      }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Understanding</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map(feedback => (
                        <tr key={feedback.id}>
                        <td>{feedback.feeling}</td>
                        <td>{feedback.understanding}</td>
                        <td>{feedback.support}</td>
                        <td>{feedback.comments}</td>
                        <td><button onClick={() => {this.deleteFeedback(feedback.id)} 
                            }>Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapReduxStateToProps = ( reduxState ) => ({ reduxState });

export default connect(mapReduxStateToProps)(AdminView);