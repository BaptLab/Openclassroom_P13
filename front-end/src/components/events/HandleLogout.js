function HandleLogout() {
  localStorage.removeItem("AccessToken");
  window.location.replace("/");
}

export default HandleLogout;
