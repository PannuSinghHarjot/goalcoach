import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalsRef } from '../firebase';


class GoalItem extends Component {

    completeGoal() {
        const { email } = this.props.user;
        const { title } = this.props.goal;
        console.log('email', email, 'title', title);
        
    }



        render(){
        console.log('this.props.goal', this.props.goal);
        const { email, title } = this.props.goal;
        return (
            <div style={{margin: '5px'}}>
                <strong>{title}</strong>
                <br />
                <span style={{margin: '5px'}}>Subbmit By: <em>{email} </em> </span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.completeGoal()}
                >
                Complete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user } = state;

    return {
        user
    }
} 

export default connect(mapStateToProps, null)(GoalItem);