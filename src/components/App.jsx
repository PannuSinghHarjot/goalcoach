import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';

//personal components

import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList'

//Personal Components


class App extends Component {

    signOut(){
        firebaseApp.auth().signOut()

    }



    render() {
        return(
            <div style={{margin: '5px'}}>
                <h3>Goal Coach</h3>
                <AddGoal />
                <hr />
                <h4>Goals </h4>
                <div><GoalList /></div>
                <hr />
                <h4>Complete Goals </h4>
                <CompleteGoalList />
                <br />
                <hr />
                <button 
                    className="btn btn-danger"
                    onClick={() => this.signOut()}
                >
                        Sign Out
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
   // console.log('state', state);
    return {

    }
}

export default connect(mapStateToProps, null)(App);