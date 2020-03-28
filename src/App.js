import React, { useState } from "react";

import SearchBar from "./Components/SearchBar";
//import useUserInfoAPI from "./Hooks/userInfo";
import Api from "./Apis/Api";
import UserInformation from "./Components/UserInformation";
import ErrorMenssage from "./Components/Commons/ErrorMenssage";

function App() {
  //let [userId, setUserId] = useState("0");
  let [idEmpty, setIdEmpty] = useState(false);
  let [userInformation, setUserInformation] = useState({});
  let [loading, setLoading] = useState(false);
  //const [userInformation, loading] = useUserInfoAPI(userId);

  const setIdCostumer = id => {
    if (id === "") {
      setIdEmpty(true);
      return;
    }
    //setUserId(userId);
    setIdEmpty(false);
    setLoading(true);
    Api(
      id,
      arrayInfo => {
        let [userInformation] = arrayInfo;
        console.log("Esta es la informacion desde App.js ", userInformation);
        setUserInformation(userInformation);
        setLoading(false);
      },
      error => {
        console.log(error);
        setLoading(false);
      }
    );
  };

  return (
    <div className="App">
      <SearchBar setIdCostumer={setIdCostumer}></SearchBar>
      <UserInformation
        userInformation={userInformation}
        loading={loading}
      ></UserInformation>
      {idEmpty && <ErrorMenssage></ErrorMenssage>}
    </div>
  );
}

export default App;
