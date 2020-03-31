import React from "react";
//import NoDataMessage from "./Commons/NoDataMessage";
import Information from "./Information";
import ReactLoading from "react-loading";
const UserInformation = ({ userInformation, loading }) => {
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
