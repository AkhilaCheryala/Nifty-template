import React, { useState } from "react";
import './Home.css';
import support from '../assets/support.svg';
import mvg from '../assets/mvg.svg';
import oscillators from '../assets/oscillators.svg';
import pointer from '../assets/pointer.svg';
import summary from '../assets/summary.svg';
import Timebtn from "../components/Timebtn";
import Random from "../components/Random";
import Values from '../components/Values';


  const Home = () => {
    const [selectedTimeInterval, setSelectedTimeInterval] = useState(null);
    const [pointerPosition, setPointerPosition] = useState(0);
    const maxPointerPosition = 150; 
  const minPointerPosition = -150; 
  
    const handleTimeIntervalChange = (timeInterval) => {
      setSelectedTimeInterval(timeInterval);
  
      let newPosition = pointerPosition + 10; // Default movement

    // Check if the new position exceeds the maximum boundary
    if (newPosition > maxPointerPosition) {
        // Set the position to the minimum and calculate the difference
        newPosition = minPointerPosition + (newPosition - maxPointerPosition);
    } else if (newPosition < minPointerPosition) {
        newPosition = minPointerPosition; // Set to minimum if below
    }

    setPointerPosition(newPosition);
    };
  return (
    <main>
      <Timebtn onButtonClick={handleTimeIntervalChange}/>
      
    <div className="container">
        <div className="graph-container">
         <div className="box-1">
       <h4>Summary</h4>
              <div className="graph">
                <img src={summary} alt="" className="g_one" />
                <img src={pointer}style={{position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1rem",
            height: "1rem",
            marginLeft: `${pointerPosition}px`}}  className="p_summary" alt="" />
                <span className="bi bi-info-circle"></span>
              </div>
              <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish btn">Bullish</p></div>
              </div>
             <Values selectedTimeInterval={selectedTimeInterval}/>
         </div>
         <div className="box-2">
            <h4>Support and Resistance</h4>
              <div className="graph">
                <img src={support} className="g_two" alt="" />
                <img src={pointer} style={{position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1rem",
            height: "1rem",
            marginLeft: `${pointerPosition}px`}}className="p_support" alt="" />
                <span className="bi bi-info-circle"></span>
             </div>
             <Values  selectedTimeInterval={selectedTimeInterval}/>
         </div>
         <div className="box-3">
            <h4>Moving averages</h4>
             <div className="graph">
              <img src={mvg} className="g_three" alt="" />
              <img src={pointer} style={{position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1rem",
            height: "1rem",
            marginLeft: `${pointerPosition}px`}}className="p_mvg" alt="" />
              <span className="bi bi-info-circle"></span>
             </div>
             <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish_2 btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish_2 btn">Bullish</p></div>
              </div>
             
              <div className="values-grid_2"><Random selectedTimeInterval={selectedTimeInterval}/>
              </div>
         </div>
         <div className="box-4">
            <h4>Oscillators</h4>
             <div className="graph">
                <img src={oscillators} className="g_four" alt="" />
                <img src={pointer}style={{position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "1rem",
            height: "1rem",
            marginLeft: `${pointerPosition}px`}} className="p_oscillators" alt="" />
                <span className="bi bi-info-circle"></span>
               
             </div>
             <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish_2 btn">Bullish</p></div>
              </div>
              <div className="values-grid_2"><Random selectedTimeInterval={selectedTimeInterval}/>
              </div>
          </div>
          </div>
    </div>
    </main>
  );
}

export default Home;
