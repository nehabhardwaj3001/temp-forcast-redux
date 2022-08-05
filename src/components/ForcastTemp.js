import React, { memo, useEffect, useState } from "react";
import "./ForcastTemp.css";
import Card from "antd/lib/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { incTempSuccess, decTempSuccess } from '../Redux/action';

const ForcastTemp = React.memo(() => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDate  = new Date();
  setInterval(() => {
    var currentDate = new Date();
  }, 1000)

  let CurrentDay = weekday[new Date().getDay()];
  let dispatch = useDispatch();
  const state = useSelector((state) => state.data);

  useEffect(() => { 
  console.log("++++++",currentDate)
    handleTemp(currentDate.getDay())
  });

  // var one = new Date("August 5 , 2022 13:59:00");

  // var d1 = new Date();   
  // var timelimitOne = (one.getTime() - d1.getTime());
  // if(timelimitOne > 0)   {
  //   setTimeout(function(){
  //     setOneOClock(true); 
  //     setSixOClock(false)
  //   }, timelimitOne);
  // }

  const handleTemp =  (day) => {
    setInterval(()=>{
      if(new Date().getHours() > 6 && new Date().getMinutes() === 19){
        dispatch(incTempSuccess(day));
      }else if (currentDate.getHours() < 6 && currentDate.getMinutes() === 0){
        dispatch(decTempSuccess(day));
      }     
    }, 10000)
  }

  return (
    <div>
      <h1> 5-Day Forcast </h1>
      <h3> New York, US</h3>
      {state.weatherData[currentDate.getDay()].temp}
      {state.weatherData.map((item, i) => (
        <div className="card-div">
          {item.day === CurrentDay ? (
            <Card key={i}>
              <h2>{item.day}</h2>
              <p>{currentDate.toLocaleString()} </p>  
              <p>{item.temp}°F</p>
            </Card>
           )  
           : (
            <div> </div>
        )} 
        </div>
      ))}
    </div>
  );
});

export default memo(ForcastTemp);