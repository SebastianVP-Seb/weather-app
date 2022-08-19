import React, { useContext } from 'react';
import './card.scss';
import moment from 'moment';
import { GradesContext } from '../../context/weatherContext';

const CardComp = ({item}) => {

  const activeCel = useContext(GradesContext);

  return (
    <div className='cardComp'>
      <h5 className='cardComp_title'>{moment(item.applicable_date).format('ddd Do MMM')}</h5>
      <img 
        className='cardComp_img'
        src={`./images/${item.weather_state_abbr}.png`} 
        alt={item.weather_state_name} />
      <div className='cardComp_grades'>
        {
          activeCel ? (<p>{Math.trunc(item.max_temp)} °C</p>)
          : (<p>{Math.trunc(((item.max_temp)*9/5)+32)} °F</p>)
        }
        {
          activeCel ? (<p className='cardComp_grades-light'>{Math.trunc(item.min_temp)} °C</p>)
          : (<p className='cardComp_grades-light'>{Math.trunc(((item.min_temp)*9/5)+32)} °F</p>)
        }
      </div>
    </div>
  );
};

export default CardComp;