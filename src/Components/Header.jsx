import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowLeft,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">
          <img
            src="./images/openweather.png"
            alt="logo"
            width={350}
            height={58}
          />
        </a>

        <div className="search-view" data-search-view>
          <div className="search-wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search City ..."
              autoComplete="off"
              className="search-field"
              data-search-field
            />
            <span className="icons">
              <FontAwesomeIcon className="leading-icon" icon={faMagnifyingGlass} />
            </span>
            <button
              className="icon-btn has-state leading-icon"
              aria-label="close search"
              data-search-toggler
            >
              <span className="icons">
                <FontAwesomeIcon icon={faArrowLeft} />
              </span>
            </button>
          </div>

          <div className="search-result">
            <ul className="view-list" data-search-list>
              <li className="view-item">
                <span className="icons">
                  <FontAwesomeIcon icon={faLocationDot} />
                </span>
                <div>
                  <p className="item-title">London</p>
                  <p className="label-2 item-subtitle">State of London, GB</p>
                </div>
                <a
                  href="#"
                  className="item-link has-state"
                  data-search-toggler
                ></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-actions">
          <button
            className="icon-btn has-state"
            aria-label="open search"
            data-search-toggler
          >
            <span className="icons">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
          </button>
          <a
            href="#/current-location"
            className="btn-primary has-state"
            data-current-location-btn
          >
            <span className="icons">
              <FontAwesomeIcon icon={faLocation} />
            </span>
            <span className="span">Current Location</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
