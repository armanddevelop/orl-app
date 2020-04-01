export const GetDatabaseById = (id, success, error) => {
  let url = `https://localhost:44363/api/rein/${id}/GetDatabaseById` ;
  
  fetch(url)
    .then(data => data.json())
    .then(data => {
      let [userInformation] = data;
      success(userInformation);
    })
    .catch(err => error("Can't Access " + err));
};
export const GetByName = (id, success, error) => {
  let url = "http://localhost:3001/users/?MemberId=" + id;
  fetch(url)
    .then(data => data.json())
    .then(data => {
      let [userInformation] = data;
      success(userInformation);
    })
    .catch(err => error(err));
};
export default { GetDatabaseById, GetByName };
