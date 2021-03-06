import React from "react";
import Information from "./Information";
import ReactLoading from "react-loading";
const UserInformation = ({ userInformation, loading }) => {
  console.log("Esto vale userInformation desde userInformation", userInformation);
  return (
    <>
      {loading ? (
        <div className="container">
          <ReactLoading color="#13eb1e" type="spin" />
        </div>
      ) : (
        <Information userInformation={userInformation} />
      )}
    </>
  );
};

export default UserInformation;
