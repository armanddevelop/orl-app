import React from "react";
import NoDataMessage from "./Commons/NoDataMessage";
const UserInformation = ({ userInformation, loading }) => {
  const Information = () => {
    return userInformation ? (
      <div>
        <h3>Name Costumer: {userInformation.name}</h3>
        <p>ReferenceId: {userInformation.ReferenceId}</p>
      </div>
    ) : (
      <NoDataMessage />
    );
  };

  return (
    <>
      {loading ? (
        <div>
          <p>Cargando...</p>
        </div>
      ) : (
        <Information />
      )}
    </>
  );
};

export default UserInformation;
