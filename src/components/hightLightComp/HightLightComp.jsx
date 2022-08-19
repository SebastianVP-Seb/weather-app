import React, { useContext } from 'react';
import WeatherContext from '../../context/weatherContext';
import './hightLight.scss';

const HightLightComp = () => {

  const {newData}=useContext(WeatherContext);
  const item=(newData.consolidated_weather[0]);

  return (
    <div className='hightLight'>
      <div className='hightLight_comp'>
          <p>Wind Status</p>
          <p>{Math.trunc(item.wind_speed)} mph</p>
      </div>
      <div className='hightLight_comp'>
          <p>Humidity</p>
          <p>{Math.trunc(item.humidity)} %</p>
      </div>
      <div className='hightLight_comp'>
          <p>Visibility</p>
          <p>{Math.trunc(item.visibility)} miles</p>
      </div>
      <div className='hightLight_comp'>
          <p>Air Pressure</p>
          <p>{item.air_pressure} mb</p>
      </div>
    </div>
  );
};

export default HightLightComp;