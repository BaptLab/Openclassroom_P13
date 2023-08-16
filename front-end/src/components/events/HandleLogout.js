function HandleLogout() {
  localStorage.removeItem("AccessToken");
  window.location.replace("/login");
}

export default HandleLogout;
