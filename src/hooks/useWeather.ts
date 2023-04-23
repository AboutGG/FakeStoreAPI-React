import axios from "axios";
import { useEffect, useState } from "react";
import { WeatherData } from "../models/wheaterData";
const url = "https://api.openweathermap.org/data/2.5/weather";

export const useWeather = (city = "Catania") => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [weather, setWeather] = useState<WeatherData>();
    useEffect(() => {
        const load = async () => {
          setLoading(true);
          setTimeout(async () => {
            const {data} = await axios.get(`${url}?q=${city}&appid=21396536a373fc5802cbc8fdf34c40d1`);
            setWeather(data);
            setLoading(false);
          }, 2000);
        };
        load();
      }, []);
      return [weather, setWeather, isLoading] as [
        WeatherData,
        Function,
        boolean
      ];
}

