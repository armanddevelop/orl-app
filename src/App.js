import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import UserInformation from "./Components/UserInformation";
import ErrorMenssage from "./Components/Commons/ErrorMenssage";
import Api from "./Apis/Api";
function App() {
  let [idEmpty, setIdEmpty] = useState(false);
  let [userInformation, setUserInformation] = useState({});
  let [loading, setLoading] = useState(false);

  const setIdCostumer = id => {
    if (id === "") {
      setIdEmpty(true);
      return;
    }

    setIdEmpty(false);
    setLoading(true);
    Api.GetByMemberId(
      id,
      info => {
        console.log(info);
        setUserInformation(info);
        setLoading(false);
      },
      err => {
        console.log(err);
        setLoading(false);
      }
    );
  };

  return (
    <div className="App">
      <SearchBar setIdCostumer={setIdCostumer}></SearchBar>
      {idEmpty && <ErrorMenssage></ErrorMenssage>}
      <UserInformation
        userInformation={userInformation}
        loading={loading}
      ></UserInformation>
    </div>
  );
}

export default App;
