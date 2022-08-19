import React, { useContext, useState } from 'react';
import './sideBar.scss';
import Search from '../search/Search';
import WeatherContext, { SearchContext } from '../../context/weatherContext';
import useFetch from '../../hooks/useFetch';
import moment from 'moment';
import Spinner from '../spinner/Spinner';

const SideBar = () => {

  const [search, setSearch] = useState(false);
  const {url, activeCel}=useContext(WeatherContext);
  const { newData, loading } = useFetch(url);

  const handleClick = () => {
    setSearch(!search);
  };

  const promGrades=((newData?.consolidated_weather[0].max_temp 
    + newData?.consolidated_weather[0].min_temp) / 2) || 0;

  return (
    <SearchContext.Provider value={handleClick} >
      <div className='sideBar'>
        {
          !newData || loading
            ? (<Spinner />)
            : (
              <>
                {
                  search
                    ? (<Search />)
                    : 
                    (<>
                      <nav className='sideBar_navbar'>
                        <button
                          onClick={() => handleClick()}
                          className='sideBar_btn'
                        >Search for places</button>
                      </nav>
                      <div className="sideBar_background">
                        <img src={`./images/${newData.consolidated_weather[0].weather_state_abbr}.png`} 
                              alt={newData.consolidated_weather[0].weather_state_name}
                        />
                      </div>
                      <div className="sideBar_info">
                        {
                          activeCel ? (<p className='sideBar_info_grades' >{Math.trunc(promGrades)} °C</p>)
                          : (<p className='sideBar_info_grades' >{Math.trunc(((promGrades)*9/5)+32)} °F</p>)
                        }
                        <p className='sideBar_info_state'>{newData.consolidated_weather[0].weather_state_name}</p>
                        <p className='sideBar_info_today'>Today {moment(newData.consolidated_weather[0].applicable_date).format('ddd Do MMM')}</p>
                      </div>
                    </>)
                  }
              </>
            )}
      </div>
    </SearchContext.Provider>
  );
};

export default SideBar;