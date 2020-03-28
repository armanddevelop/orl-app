import React, { useState } from "react";
import logo from "./img/logo.png";
import "../Styles/SearchBar.css";

const SearchBar = ({ setIdCostumer }) => {
  let [idCustomer, setIdCustomer] = useState("");
  const prodUrl = "https://www.herbalife.com.mx";
  const handleSubmit = e => {
    e.preventDefault();

    setIdCostumer(idCustomer);
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      {/*menu de hamburguesa */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {/*Logo herbalife */}
      <a
        className="navbar-brand"
        href={prodUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logo}
          alt="herbalifelogo"
          width="30"
          height="30"
          className="d-inline-block aling-top"
        ></img>
      </a>
      {/*Form */}
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
          <input
            className="form-control"
            type="search"
            placeholder="CostumerId"
            onChange={e => setIdCustomer(e.target.value)}
          />
          <button
            id="submitButton"
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
