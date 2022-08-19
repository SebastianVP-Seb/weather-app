import { useState } from 'react';
import './App.scss';
import RightSide from './components/rightSide/RightSide';
import SideBar from './components/sideBar/SideBar';
import Spinner from './components/spinner/Spinner';
import WeatherContext from './context/weatherContext';
import useFetch from './hooks/useFetch';

function App() {

  let woeid='116545';
  const [url, setUrl]=useState(`https://www.metaweather.com/api/location/${woeid}/`);

  const {newData, loading}= useFetch(url);

  const [activeCel, setActiveCel]=useState(true);
  const [activeFar, setActiveFar]=useState(false);

  const handleClickCel=()=>{
      setActiveCel(!activeCel)
      setActiveFar(!activeFar)
  };

  const handleClickFar=()=>{
      setActiveFar(!activeFar)
      setActiveCel(!activeCel)
  };

  const valueProvider={
    setUrl, newData, loading, url, handleClickCel, handleClickFar, activeCel, activeFar
  };

  return (
    <WeatherContext.Provider value={valueProvider} >
      <div className="App">
        <SideBar />
        {
          !newData || loading ? ( <Spinner /> ) 
          : ( <RightSide/> )
        }
      </div>
    </WeatherContext.Provider>
  );
};

export default App;
