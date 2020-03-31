import React from "react";
import "../../Styles/Common.css";

const NoDataMessage = () => {
  return (
    <div
      id="noDataMensage"
      className="container alert alert-danger"
      role="alert"
    >
      No data for your search criteria. Try again
    </div>
  );
};

export default NoDataMessage;
