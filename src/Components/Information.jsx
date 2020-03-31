import React from "react";
import NoDataMessage from "./Commons/NoDataMessage";
import "../Styles/Information.css";

const Informacion = ({ userInformation }) => {
  return (
    <>
      {userInformation ? (
        <div className="container">
          <h1>User Information {userInformation.MemberId}</h1>
          {userInformation.name === undefined ? null : (
            <>
              <div className="card" id="cardInformation">
                <h5 className="card-title">
                  Name Costumer: {userInformation.name}
                </h5>
                <p>ReferenceId: {userInformation.ReferenceId}</p>
                <p>Locale: {userInformation.locale}</p>
                <p>Date: {userInformation.date}</p>
                <p>Order Number: {userInformation.orderInfo.OrderNumber}</p>
                <a href="!#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </>
          )}
        </div>
      ) : (
        <NoDataMessage />
      )}
    </>
  );
};

export default Informacion;
