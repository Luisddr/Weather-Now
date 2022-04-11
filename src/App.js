import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar.jsx";
import Title from "./components/Title/Title.jsx";
import Cards from "./components/Cards/Cards.jsx";
import FootBar from "./components/FootBar/FootBar.jsx";
import City from "./components/City/City.jsx";
import Style from "../src/components/Card/Card.module.css";
import About from "./components/About/About.jsx";

function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "ac1a7e98f2fa1ab9a8a4ced130b4e471";

  function onSearch(city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const city = {
            temp: Math.round(recurso.main.temp),
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            name: recurso.name,
            id: recurso.id,
            img: recurso.weather[0].icon,
            descript: recurso.weather[0].description,
            weather: recurso.weather[0].main,
            sunrise: recurso.sys.sunrise,
            sunset: recurso.sys.sunset,
            wind: recurso.wind.speed,
            lon: recurso.coord.lon,
            lat: recurso.coord.lat,
          };
          setCities((prevCities) => {
            if (prevCities.some((ciudad) => ciudad.name === city.name)) {
              return prevCities;
            } else {
              return [...prevCities, city];
            }
          });
        } else {
          alert("Sorry, the city was not found, try again");
        }
      });
  }

  function onClose(id) {
    setCities((prevCities) => prevCities.filter((c) => c.id !== id));
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));
    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path={"/"} render={() => <NavBar onSearch={onSearch} />} />
      <Route exact path={"/"} render={() => <Title />} />
      <Route
        exact
        path={"/"}
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        path={"/city/:cityId"}
        render={({ match }) => <City city={onFilter(match.params.cityId)} />}
      />
      <Route path={"/about"} component={About} />
    </div>
  );
}

export default App;
