export const GetByMemberId = (id, success, error) => {
  let url = "http://localhost:3001/users/?MemberId=" + id;
  fetch(url)
    .then(data => data.json())
    .then(data => {
      let [userInformation] = data;
      success(userInformation);
    })
    .catch(err => error(err));
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
export default { GetByMemberId, GetByName };
