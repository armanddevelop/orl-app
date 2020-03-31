import React from "react";
import NoDataMessage from "./Commons/NoDataMessage";

const Informacion = ({ userInformation }) => {
  return (
    <>
      {userInformation ? (
        <div className="container">
          <h1>User Information {userInformation.MemberId}</h1>
          <h3>Name Costumer: {userInformation.name}</h3>
          <p>ReferenceId: {userInformation.ReferenceId}</p>
        </div>
      ) : (
        <NoDataMessage />
      )}
    </>
  );
};

export default Informacion;
