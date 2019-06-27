import React from 'react';



const Dasboard = props => {
  
     return (
        <>
        <button onClick = {props.strike}>
            Strike
        </button>
        <button onClick = {props.ball}>
            Ball
        </button>
        <button onClick = {props.hit}>
            Hit
        </button>
        <button onClick = {props.foul}>
            Foul
        </button>
        </>
     )
  }

export default Dasboard;