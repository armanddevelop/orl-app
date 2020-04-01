import React from "react";
import Moment from "react-moment";
import NoDataMessage from "./Commons/NoDataMessage";
import "../Styles/Information.css";

const Informacion = ({ userInformation }) => {
  console.log("Hola desde information",userInformation);
  return (
    <>
      {userInformation ? (
        <div className="container">
          <h1>User Information {userInformation.referenceId}</h1>
          {userInformation.distributorId === undefined ? null : (
            <>
              <div className="card" id="cardInformation">
                <h5 className="card-title">
                  Distributor Id: {userInformation.distributorId}
                </h5>
                <p>Status: {userInformation.status}</p>
                <p>Locale: {userInformation.locale}</p>
                <p>Date of creation: <Moment format="YYYY/MM/DD">{userInformation.createDate}</Moment></p>
                <p>Date of modification: <Moment format="YYYY/MM/DD">{userInformation.modifiedDate}</Moment></p>
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
