import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions'
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component {

        componentDidMount(){

            completeGoalRef.on('value', snap => {
                let completeGoals = [];

                snap.forEach(completeGoal => {
                    //es5
                    /*

                    const email = completeGoal.val().email;

                    const title = completeGoal.val().title;

                    */
                   //es6 syntax
                    const { email, title } = completeGoal.val();
                    completeGoals.push({email, title})
                })
                //console.log('dfdfde', completeGoals)
                this.props.setCompleted(completeGoals);
            })

        }

        clearCompleted(){
            //set() is firebase functions that sets the value of selected variable to selected state!
            completeGoalRef.set([])
        }

    render(){
        console.log('this;props.completeGoals', this.props.completeGoal)
        return(
            <div> 
                {this.props.completeGoals.map((completeGoal, index) => {
                    const { title, email} = completeGoal;

                    return(
                        <div key={index}>
                            <strong>{title}</strong> Completed By: <em> {email} </em>
                        </div>
                     
                    )
                })
            }
                   <button 
                   className="btn btn-primary"
                   onClick={() => this.clearCompleted()}
                   >
                        Clear All
                   </button>
            </div>
        )
    }

}

function mapStateToProps(state){
    const {completeGoals } = state;
    return {
        completeGoals
    }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);