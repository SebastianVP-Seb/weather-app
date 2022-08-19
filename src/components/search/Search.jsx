import React, { useContext, useState } from 'react';
import WeatherContext, { SearchContext } from '../../context/weatherContext';
import useFetch from '../../hooks/useFetch';
import './search.scss';

const Search = () => {

  const {setUrl}=useContext(WeatherContext);

  //muestra las ciudades en el buscador
  const [city1, setCity1] = useState('116545');
  const [newUrl, setNewUrl] = useState('');

  const handleClick = useContext(SearchContext);
  const { newData, loading } = useFetch(newUrl);

  const handleChange = (e) => {
    setCity1(e.target.value);
    setNewUrl(`https://www.metaweather.com/api/location/search/?query=${city1}`)
  };

  // alimenta las cardComp 
  const handleClickLi=(item)=>{
    console.log(`click a ${item.woeid}`);
    setUrl(`https://www.metaweather.com/api/location/${item.woeid}/`)
  };

  return (
    <>
      <button onClick={handleClick} className='search_btnClose' >Close</button>
      <form className='search_form'>
        <input
          type="text"
          onChange={handleChange}
          className='search_input'
          placeholder='Search for places...'
        />
      </form>
      {
        !newData || loading ?
          (<></>)
          : 
          (
            <ul className='search_list'>
              {
                newData.map((item) => (<>
                  <li key={item.woeid} className='search_li' 
                    onClick={()=>handleClickLi(item)}
                  >{item.title}</li>
                </>
                ))
              }
            </ul>
          )
      }
    </>
  );
};

export default Search;