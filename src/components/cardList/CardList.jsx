import React, { useContext } from 'react';
import WeatherContext from '../../context/weatherContext';
import CardComp from '../card/CardComp';
import './cardList.scss';

const CardList = () => {

  const {newData}=useContext(WeatherContext);
  const newArray=newData.consolidated_weather.slice(1);

  return (
    <div className='cardList'>
      {
        newArray.map((item)=>
        <CardComp
          key={item.id}
          item={item}
        />)
      }
    </div>
  );
};

export default CardList;