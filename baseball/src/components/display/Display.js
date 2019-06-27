import React from 'react';
import Dashboard from '../dashboard/Dasboard'



class Display extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
        hit: 0,
        fouls: 0,
    }

    strikeHandler = () => {
        const { strikes } = this.state;
        if (strikes < 2) {
          return this.setState({ strikes: strikes + 1 });
        } else {
          return (
              this.setState({strikes: 0,
                            balls: 0,
                            hit: 0,
                            fouls: 0 })
          );
        }
      };

      ballHandler = () => {
        const { balls } = this.state;
        if (balls < 3) {
          return this.setState({ balls: balls + 1 });
        } else {
          return (
              this.setState({strikes: 0,
                            balls: 0,
                            hit: 0,
                            fouls: 0 })
          );
        }
      };


      hitHandler = () => {
        const { hit } = this.state;
        if (hit === 0) {
          return this.setState({ strikes: 0,
                                 balls: 0,
                                 hit: 0,
                                 fouls: 0
                                 }) + alert("YOU HIT THE BALL RUN RUN RUN!!!")
        } else {
          return (
              this.setState({strikes: 0,
                            balls: 0,
                            hit: 0,
                            fouls: 0 })
          );
        }
      };

      foulHandler = () => {
        const { fouls, strikes } = this.state;
        if (strikes === 0 && fouls === 0) {
          return this.setState({strikes: strikes + 1, fouls: fouls + 1 });
        } else if (strikes === 1) {
          return this.setState({strikes: strikes + 1 });
        }else { 
          return (
              this.setState({strikes: 0,
                            balls: 0,
                            hit: 0,
                            fouls: 0 })
          );
        }
      };
    
    render() {
        const {strikes, balls, fouls, hit } = this.state
     return (
        <>
        <h1>BASEBALL</h1>
        <Dashboard strike = {this.strikeHandler}
                   ball = {this.ballHandler}
                   hit = {this.hitHandler}
                   foul = {this.foulHandler}/>
        <h2>Strikes: {strikes}</h2>
        <h2>Balls: {balls}</h2>
        <h2>Hits: {hit}</h2>
        <h2>Fouls: {fouls}</h2>
        
        
        </>
     )
  }
}

export default Display;