import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useWeather } from '../../hooks/useWeather';

export const WheaterCity = () => {
  const [city, , isLoading] = useWeather("Catania");
  console.log(city)
  return (
    <>
    {<p>{city.weather[0].description}</p>}
    </>
    /*<div style={{paddingLeft: '30px'}}>
        <button onClick={() => setPage(Math.max(1, page -1))}>-</button>
        <span>{page}</span>
        <button onClick={() => setPage(page +1)}>+</button>
        {isLoading && <p>loading</p>}
        {!isLoading && <ul>
            {characters.map(item =><li>{item.id}-{item.name}</li>)}
        </ul>}
    </div>*/
  )
}