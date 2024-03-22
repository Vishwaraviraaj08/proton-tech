import React from 'react';
import {useEffect} from "react";

export default function Countdown() {
    useEffect(() => {
        setInterval(() => {
            const data = new Date();
            const dayHtml = document.getElementById("days")
            const hourHtml = document.getElementById("hours")
            const minutesHtml = document.getElementById("minutes")
            const secondsHtml = document.getElementById("seconds")
            dayHtml.innerHTML = data.getDay();
            hourHtml.innerHTML = data.getHours() > 12 ? data.getHours() - 12 : data.getHours();
            minutes.innerHTML = data.getMinutes();
            secondsHtml.innerHTML = data.getSeconds();
        }, 1000);
    });
    return (<>
        <style>{` 
        *, *::after, *::before { box-sizing: border-box; margin: 0; padding: 0;  }  h1 { text-transform: uppercase; word-spacing: 0.5em; font-weight: 400; transform: scale(1, 1.5); color: #33393c; margin-bottom: 50px; } .time-blocks { display: flex; gap: 20px; align-items: center; justify-content: center; } .block { position: relative; display: flex; align-items: center; justify-content: center; width: 150px; height: 150px; background: radial-gradient(circle farthest-corner at 150px 150px, #2f3435 60%, #34393c 50%); } .side-text{ position: absolute; bottom:-30px; left:0px; transform: rotate(270deg); transform-origin: 0 0; font-weight: 500; font-size: 25px; color: #667977; } .time-text{ font-weight:500; transform:scaleY(1.0); font-size: 60px; color:#ca2f55; } `} </style>
        <div className="time-blocks mt-5">
            <div className="block"><span className="side-text">DAYS</span> <span className="time-text"
                                                                                 id="days"> 12 </span></div>
            <div className="block"><span className="side-text">HOURS</span> <span className="time-text"
                                                                                  id="hours"> 5 </span></div>
            <div className="block"><span className="side-text">MINUTES</span> <span className="time-text"
                                                                                    id="minutes"> 42 </span></div>
            <div className="block"><span className="side-text">SECONDS</span> <span className="time-text"
                                                                                    id="seconds"> 42 </span></div>
        </div>
    </>);
}