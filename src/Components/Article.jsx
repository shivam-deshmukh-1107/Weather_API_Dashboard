import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faWind,
  faSun,
  faMoon,
  faDroplet,
  faEye,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";

function Article() {
  return (
    <article className="container">
      <div className="content-left">
        {/* CURRENT WEATHER */}
        <section
          className="section current-weather"
          aria-label="current weather"
          data-current-weather
        >
          <div className="card card-lg current-weather-card">
            <h2 className="title-2 card-title">Now</h2>
            <div className="wrapper">
              <p className="heading">25&deg;c</p>
              <img
                src="./images/weather_icons/01d.png"
                alt="Overcats Clouds"
                width={64}
                height={64}
                className="weather-icon"
              />
            </div>
            <p className="body-3">Overcast Clouds</p>
            <ul className="meta-list">
              <li className="meta-item">
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
                <p className="title-3 meta-text">Thusday 16, Feb</p>
              </li>
              <li className="meta-item">
                <span>
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <p className="title-3 meta-text">London, GB</p>
              </li>
            </ul>
          </div>
        </section>

        {/* FORECAST  */}
        <section
          className="section forecast"
          aria-labelledby="forecast-label"
          data-5-day-forcast
        >
          <h2 className="title-2" id="forecast-label">
            5 Days Foecast
          </h2>
          <div className="card card-lg forecast-card">
            <ul>
              <li className="card-item">
                <div className="icon-wrapper">
                  <img
                    src="./images/weather_icons/01n.png"
                    alt="weather-icon"
                    width={36}
                    height={36}
                  />

                  <span className="span">
                    <p className="title-2">25</p>
                  </span>
                </div>
                <p className="label-1">17 Feb</p>
                <p className="label-1">Friday</p>
              </li>

              <li className="card-item">
                <div className="icon-wrapper">
                  <img
                    src="./images/weather_icons/01n.png"
                    alt="weather-icon"
                    width={36}
                    height={36}
                  />

                  <span className="span">
                    <p className="title-2">25</p>
                  </span>
                </div>
                <p className="label-1">17 Feb</p>
                <p className="label-1">Friday</p>
              </li>

              <li className="card-item">
                <div className="icon-wrapper">
                  <img
                    src="./images/weather_icons/01n.png"
                    alt="weather-icon"
                    width={36}
                    height={36}
                  />

                  <span className="span">
                    <p className="title-2">25</p>
                  </span>
                </div>
                <p className="label-1">17 Feb</p>
                <p className="label-1">Friday</p>
              </li>

              <li className="card-item">
                <div className="icon-wrapper">
                  <img
                    src="./images/weather_icons/01n.png"
                    alt="weather-icon"
                    width={36}
                    height={36}
                  />

                  <span className="span">
                    <p className="title-2">25</p>
                  </span>
                </div>
                <p className="label-1">17 Feb</p>
                <p className="label-1">Friday</p>
              </li>

              <li className="card-item">
                <div className="icon-wrapper">
                  <img
                    src="./images/weather_icons/01n.png"
                    alt="weather-icon"
                    width={36}
                    height={36}
                  />

                  <span className="span">
                    <p className="title-2">25</p>
                  </span>
                </div>
                <p className="label-1">17 Feb</p>
                <p className="label-1">Friday</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="content-right">
        {/* HIGHLIGHT   */}
        <section
          className="section highlights"
          aria-labelledby="highlights-label"
          data-highlights
        >
          <div className="card card-lg">
            <h2 className="title-2" id="highlights-label">
              Todays Highlights
            </h2>
            <div className="highlight-list">
              <div className="card card-sm highlight-card one">
                <h3 className="title-3">Air Quality Index</h3>
                <div className="wrapper">
                  <span className="icons">
                    <FontAwesomeIcon icon={faWind} />
                  </span>
                  <ul className="card-list">
                    <li className="card-item">
                      <p className="title-1">23.3</p>
                      <p className="label-1">
                        PM<sub>2.5</sub>
                      </p>
                    </li>
                    <li className="card-item">
                      <p className="title-1">23.3</p>
                      <p className="label-1">
                        PM<sub>2.5</sub>
                      </p>
                    </li>
                    <li className="card-item">
                      <p className="title-1">23.3</p>
                      <p className="label-1">
                        PM<sub>2.5</sub>
                      </p>
                    </li>
                    <li className="card-item">
                      <p className="title-1">23.3</p>
                      <p className="label-1">
                        PM<sub>2.5</sub>
                      </p>
                    </li>
                  </ul>
                </div>

                <span className="badge aqi-1 label-1" title="aqi message">
                  Good
                </span>
              </div>

              <div className="card card-sm highlight-card two">
                <h3 className="title-3">Sunrise & Sunset</h3>
                <div className="card-list">
                  <div className="card-item">
                    <span className="icons">
                      <FontAwesomeIcon icon={faSun} />
                    </span>
                    <div>
                      <p className="label-1">Sunrise</p>
                      <p className="title-1">6: 30 AM</p>
                    </div>
                  </div>
                  <div className="card-item">
                    <span className="icons">
                      <FontAwesomeIcon icon={faMoon} />
                    </span>
                    <div>
                      <p className="label-1">Sunset</p>
                      <p className="title-1">5: 54 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Humidity</h3>
                <div className="wrapper">
                  <span className="icons">
                    <FontAwesomeIcon icon={faDroplet} />
                  </span>
                  <p className="title-1">
                    35<sup>%</sup>
                  </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Pressure</h3>
                <div className="wrapper">
                  <span className="icons">
                    <FontAwesomeIcon icon={faWind} />
                  </span>
                  <p className="title-1">
                    1052<sup>hPa</sup>
                  </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Visibility</h3>
                <div className="wrapper">
                  <span className="icons">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                  <p className="title-1">
                    10<sup>Km</sup>
                  </p>
                </div>
              </div>

              <div className="card card-sm highlight-card">
                <h3 className="title-3">Feels Like</h3>
                <div className="wrapper">
                  <span className="icons">
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} />
                  </span>
                  <p className="title-1">
                    25&deg;<sup>C</sup>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOURLY FORECAST */}
        <section
          className="section hourly-forecast"
          aria-label="hourly forecast"
          data-hourly-forecast
        >
          <h2 className="title-2">Today at</h2>
          <div className="slider-container">
            <ul className="slider-list" data-temp>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/01n.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">25&deg;</p>
                </div>
              </li>
            </ul>

            <ul className="slider-list" data-wind>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
              <li className="slider-item">
                <div className="card card-sm slider-card">
                  <p className="body-3">03 PM</p>
                  <img
                    src="./images/weather_icons/direction.png"
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="weather-icon"
                    title=""
                  />
                  <p className="body-3">12 Km/h</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p className="body-3">
          Copyright 2023 Shivam Deshmukh. All Right Reserved.
        </p>
        <p className="body-3">
          Powered By{" "}
          <a
            href="https://openweathermap.org/api"
            title="Free OpenWeather Api"
            target="_blank"
            rel="noopener"
          >
            <img
              src="./images/openweather.png"
              width={150}
              height={30}
              loading="lazy"
              alt="OpenWeather"
            />
          </a>
        </p>
      </footer>

      {/* LOADING */}
      <div className="loading" data-loading></div>
    </article>
  );
}

export default Article;
