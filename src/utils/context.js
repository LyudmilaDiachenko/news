import { createContext, useContext, useEffect, useState } from "react";
import { BASE_URL, WEATHER_URL } from "./db_profile";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState([]);
  const [globalNews, setGlobalNewsState] = useState([]);
  const [weatherState, setWeather] = useState([]);
  const [index, setIndex] = useState(0);

  const get_Data = async (...objValue) => {
    const searchValue = objValue[0] || "ukraine";
    try {
      const response = await fetch(
        `${BASE_URL.apiNews}/${BASE_URL.path}?q=${searchValue}&${BASE_URL.apiKey}`
      );
      const data = await response.json();
      setGlobalState(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const getWeatherData = async (...objValue) => {
    const searchValue = objValue[0] || "auto:ip";
    try {
      if (searchValue.length >= 3) {
        const response = await fetch(
          `${WEATHER_URL.start_url}${WEATHER_URL.path_forecast}?${WEATHER_URL.api_key}&q=${searchValue}&api=yes&lang=uk&${objValue[1]}`
        );
        const data = await response.json();
        setWeather(data);
        return data;
      } else {
        console.info("Введіть більше 2 літер");
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    get_Data();
  }, []);
  const updateNews = async (params) => {
    try {
      await get_Data();
      const filteredNews = globalState.articles.filter(
        (item) => item.title === params
      );
      setGlobalNewsState(filteredNews);
    } catch (error) {
      console.error(error);
    }
  };
  function updateIndex(newIndex) {
    setIndex(newIndex);
  }
  return (
    <AppContext.Provider
      value={{
        globalState,
        get_Data,
        globalNews,
        updateNews,
        weatherState,
        getWeatherData,
        index,
        updateIndex
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
