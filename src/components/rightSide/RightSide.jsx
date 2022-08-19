import React, {useContext} from 'react';
import WeatherContext, { GradesContext } from '../../context/weatherContext';
import CardList from '../cardList/CardList';
import HightLightComp from '../hightLightComp/HightLightComp';
import './rightSide.scss';

const RightSide = () => {

  const {handleClickCel, handleClickFar, activeCel, activeFar}=useContext(WeatherContext);

  return (
    <GradesContext.Provider value={activeCel} >
      <div className='rightSide' >
          <div className='gradesBtns'>
            <button 
                onClick={()=>handleClickCel()}
                disabled={activeCel}
                className={`gradesBtns_btn ${activeCel ? 'active' : ''}`}>°C</button>
            <button 
                onClick={()=>handleClickFar()}
                disabled={activeFar}
                className={`gradesBtns_btn ${activeFar ? 'active' : ''}`}>°F</button>
          </div>
          <CardList />
          <h4 className='rightSide_title'>Today's Hightlights</h4>
          <HightLightComp />
      </div>
    </GradesContext.Provider>
  );
};

export default RightSide;