import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import UserInformation from "./Components/UserInformation";
import ErrorMenssage from "./Components/Commons/ErrorMenssage";
import NoDataMessage from "./Components/Commons/NoDataMessage";
import Api from "./Apis/Api";
function App() {
  let [idEmpty, setIdEmpty] = useState(false);
  let [userInformation, setUserInformation] = useState({});
  let [loading, setLoading] = useState(false);
  let [noData,setNoDataFound] =useState(false);

  const setIdCostumer = id => {
    if (id === "") {
      setIdEmpty(true);
      return;
    }

    setIdEmpty(false);
    setLoading(true);
    Api.GetDatabaseById(
      id,
      info => {
        console.log(info);
        setUserInformation(info);
        setLoading(false);
        setNoDataFound(false);
      },
      err => {
        console.log(err);
         setLoading(false);
         setNoDataFound(true);
      }
    );
  };

  return (
    <div className="App">
      <SearchBar setIdCostumer={setIdCostumer}></SearchBar>
      {idEmpty ? (
        <ErrorMenssage></ErrorMenssage>
      ) : (
        <UserInformation
          userInformation={userInformation}
          loading={loading}
        ></UserInformation>
      )}
      {
        noData && <NoDataMessage></NoDataMessage>
      }
    </div>
  );
}

export default App;
