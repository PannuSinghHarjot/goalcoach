import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import  GoalItem  from './GoalItem'

class GoalList extends Component  {

    componentDidMount(){
        /*firebase on('value', function(argument){
            --------------------------------------
            then use the javascript forEach
            to map over argument pass in another argument in 
            forEach function where you store the new value in 
            variable let 
            -----------------------------------------
            argument.forEach(argument, =>{
                let name = argument.val() (val() built in firebase function)
            })
        })
        */
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach( goal => {
                //let goalObject = goal.val();
                const { email, title} = goal.val();
               // console.log('goalObject', goalObject);
               const serverKey = goal.key;
               goals.push({email, title, serverKey});
              // console.log('goal', goal);
            })

            console.log('goals', goals);
                this.props.setGoals(goals);
        })
    }

   



    render(){
       // console.log('this.props.goals', this.props.goals);
        return(
            <div> 
                {
                    this.props.goals.map((goal, index) => {
                        
                        return (
                            <GoalItem key={index} goal={goal} />
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, {setGoals})(GoalList);
