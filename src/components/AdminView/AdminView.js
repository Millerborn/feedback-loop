import React, { Component } from 'react';
import axios from 'axios';
import './AdminView.css'

class AdminView extends Component {
state= {
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
                        <td>{feedback.delete}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default AdminView;