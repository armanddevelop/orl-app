import { useEffect, useState } from "react";

const useUserInfoAPI = id => {
  let [userInformation, setUserInformation] = useState({});
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    let url = "http://localhost:3001/users/?MemberId=" + id;
    if (id !== "0") {
      setLoading(true);
      fetch(url)
        .then(resp => resp.json())
        .then(arrayInfo => {
          let [userInformation] = arrayInfo;
          setLoading(false);
          console.log(
            "Esta es la informacion de userInformation ",
            userInformation
          );
          setUserInformation(userInformation);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [id]);
  return [userInformation, loading];
};

export default useUserInfoAPI;
