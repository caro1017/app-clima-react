import { useState } from "react";

import "./searcher.css";

import { Paper, InputBase, IconButton, Button } from "@mui/material";

import { Search } from "@mui/icons-material";

export const Searcher = () => {
  const styles = {
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      borderRadius: 40,
      backgroundColor: "#ffffff2e",
      textTransform: "uppercase",
    },
    input: {
      marginLeft: 10,
      flex: 1,
      color: "#6c757d",
      fontWeight: 300,
    },
    iconButton: {
      color: "#6c757d",
    },
    button: {
      color: "#6c757d",
      fontWeight: 400,
      backgroundColor: "#ffffff2e",
      backdropFilter: "blur(5px)",
    },
  };

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    queryWeather();
  };

  const queryWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8684198c2eb23343d85874dac76f1006&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const clearWeatherData = () => {
    setWeatherData(null);
  };

  return (
    <>
      <Paper 
        component="form" 
        onSubmit={handleFormSubmit} 
        style={styles.root}>
        <InputBase
          placeholder="Buscar Ciudad"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.input}
        />
        <IconButton 
            type="submit" 
            aria-label="search" 
            style={styles.iconButton}>
          <Search />
        </IconButton>
      </Paper>

      {weatherData && (
        <div className="containerStyled">
          <h2 className="titleStyled">{city}</h2>
          <h3 className="humidityStyled">
            Humedad {weatherData.main.humidity} %
          </h3>
          <img
            className="iconStyled"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="Weather Icon"
          />
          <h4 className="descriptionStyled">
            {weatherData.weather[0].description}
          </h4>
          <p className="tempStyled">{Math.ceil(weatherData.main.temp)} °C</p>
          <Button 
            variant="contained"
            size="medium" 
            onClick={clearWeatherData}
            style={styles.button}
            >
            Limpiar
          </Button>
        </div>
      )}
    </>
  );
};
