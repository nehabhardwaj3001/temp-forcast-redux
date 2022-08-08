import React, { memo, useEffect, useState } from "react";
import "./ForcastTemp.css";
import Card from "antd/lib/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { incTempSuccess, decTempSuccess } from "../Redux/action";

const ForcastTemp = () => {
  const [time, setTime] = useState();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let CurrentDay = weekday[new Date().getDay()];
  let dispatch = useDispatch();
  const state = useSelector((state) => state.data);
console.log("state", state)
  useEffect(() => {
    handleTime();
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleTime = () => {
    console.log("handleTime call");
    var now = new Date().getTime();

    let nextHour = new Date();
    nextHour.setHours(nextHour.getHours() + 1);
    nextHour.setMinutes(0);
    nextHour.setSeconds(0);
    nextHour.setMilliseconds(0);

    let currentHour = new Date();
    console.log(" nextHour - currentHour :", nextHour - currentHour);
    setTimeout(() => {
      handleTemp(CurrentDay);
      setInterval(() => {
        handleTemp(CurrentDay);
      }, 1000 * 60 * 60);
    }, nextHour - currentHour);
  };

  const handleTemp = (day) => {
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();

    if (hour >= 1 && hour <= 6) {
      dispatch(decTempSuccess(day));
    } else {
      dispatch(incTempSuccess(day));
    }
  };

  return (
    <div>
      <h1> 5-Day Forcast </h1>
      <h3> New York, US</h3>
      {state.weatherData.map((item, i) => (
        <div className="card-div">
          {item.day === CurrentDay ? (
            <Card key={i}>
              <h2>{item.day}</h2>
              <p>{time} </p>
              <p>{(item.temp)?.toFixed(2)}°F</p>
            </Card>
          ) : (
            <div> </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ForcastTemp;
