import React from "react";
import './Home.css';
import support from '../assets/support.svg';
import mvg from '../assets/mvg.svg';
import oscillators from '../assets/oscillators.svg';
import pointer from '../assets/pointer.svg';
import summary from '../assets/summary.svg';
import Timebtn from "../components/Timebtn";

const Home = () => {
 
  return (
    <main>
      <Timebtn/>
    <div className="container">
        <div className="graph-container">
         <div className="box-1">
       <h4>Summary</h4>
              <div className="graph">
                <img src={summary} alt="" className="g_one" />
                <img src={pointer} className="p_summary" alt="" />
                <span className="bi bi-info-circle"></span>
              </div>
              <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish btn">Bullish</p></div>
              </div>
              <div className="values-grid">
                  <div><p className="value-1">19456.55</p><p className="value-2">EMA(20)</p></div>
                  <div><p className="value-1">18998.61</p><p className="value-2">SMA(20)</p></div>
                  <div><p className="value-1">96.08</p><p className="value-2">RSI(14)</p></div>
                  <div><p className="value-1">89.45</p><p className="value-2">Amwesome Osc.</p></div>
                  <div><p className="value-1">26.34</p><p className="value-2">Macd(12,26,9)</p></div>
                  <div><p className="value-1">2.45</p><p className="value-2">CCI(20)</p></div>  
              </div>
         </div>
         <div className="box-2">
            <h4>Support and Resistance</h4>
              <div className="graph">
                <img src={support} className="g_two" alt="" />
                <img src={pointer} className="p_support" alt="" />
                <span className="bi bi-info-circle"></span>
             </div>
             <div className="values-grid box-grid">
                  <div><p className="value-1">19456.55</p><p className="value-2">EMA(20)</p></div>
                  <div><p className="value-1">18998.61</p><p className="value-2">SMA(20)</p></div>
                  <div><p className="value-1">96.08</p><p className="value-2">RSI(14)</p></div>
                  <div><p className="value-1">89.45</p><p className="value-2">Amwesome Osc.</p></div>
                  <div><p className="value-1">26.34</p><p className="value-2">Macd(12,26,9)</p></div>
                  <div><p className="value-1">2.45</p><p className="value-2">CCI(20)</p></div>  
              </div>
         </div>
         <div className="box-3">
            <h4>Moving averages</h4>
             <div className="graph">
              <img src={mvg} className="g_three" alt="" />
              <img src={pointer} className="p_mvg" alt="" />
              <span className="bi bi-info-circle"></span>
             </div>
             <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish_2 btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish_2 btn">Bullish</p></div>
              </div>
             
              <div className="values-grid_2">
              <p className="view-more">view more<span className="bi bi-caret-down-fill"></span> </p>
                <div className="values"><p><span className="s">S</span>EMA(5)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="s">S</span>SMA(5)</p><p className="values-2">13679.40</p></div>
                <div className="values"><p><span className="s">S</span>EMA(15)</p><p className="values-2">15779.0</p></div>
                <div className="values"><p><span className="s">S</span>SMA(20)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="n">B</span>EMA(7)</p><p className="values-2">17999.40</p></div>
                <div className="values"><p><span className="s">S</span>EMA(8)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="s">S</span>EMA(22)</p><p className="values-2">19979.40</p></div>
                <div className="values"><p><span className="n">B</span>SMA(50)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="s">B</span>EMA(21)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="n">B</span>SMA(5)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="n">N</span>Ichimoku Baseline(2,6,15,23)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="s">N</span>Hull MA(8)</p><p className="values-2">19999.40</p></div>
              </div>

         </div>
         <div className="box-4">
            <h4>Oscillators</h4>
             <div className="graph">
                <img src={oscillators} className="g_four" alt="" />
                <img src={pointer} className="p_oscillators" alt="" />
                <span className="bi bi-info-circle"></span>
               
             </div>
             <div className="bar-values">
                <div><p className="g-value-bearish">5</p><p className="bearish btn">Bearish</p> </div>
                <div><p className="g-value-neutral">12</p> <p className=" neutral btn">Neutral</p></div>
                <div> <p className="g-value-bullish">6</p><p className=" bullish_2 btn">Bullish</p></div>
              </div>
              <div className="values-grid_2">
              <p className="view-more">view more<span className="bi bi-caret-down-fill"></span> </p>

                <div className="values"><p><span className="n">S</span>EMA(5)</p><p className="values-2">19999.40</p></div>
                <div className="values"><p><span className="s">N</span>RSI(5)</p><p className="values-2">5.40</p></div>
                <div className="values"><p><span className="s">S</span>EMA(15)</p><p className="values-2">31.32</p></div>
                <div className="values"><p><span className="n">N</span>CCI(20)</p><p className="values-2"> 7.33</p></div>
                <div className="values"><p><span className="n">B</span>Momentum(7)</p><p className="values-2">-86.46</p></div>
                <div className="values"><p><span className="s">S</span>Ultimate OSc.(7,14,28)(8)</p><p className="values-2">66.33</p></div></div>
         </div>
      </div>
    </div>
    </main>
  );
}

export default Home;
