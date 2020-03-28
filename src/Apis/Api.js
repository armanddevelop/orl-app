const Api = (id, success, error) => {
  let url = "http://localhost:3001/users/?MemberId=" + id;

  fetch(url)
    .then(resp => resp.json())
    .then(userInfo => {
      success(userInfo);
    })
    .catch(err => {
      error(err);
    });
};

export default Api;
