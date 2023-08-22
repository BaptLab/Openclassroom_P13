import axios from "axios";

const Login_URL = "http://localhost:3001/api/v1/user/login";
const Profile_URL = "http://localhost:3001/api/v1/user/profile";

export const getUserToken = async (user, pwd) => {
  try {
    const response = await axios.post(
      Login_URL,
      {
        email: user,
        password: pwd,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response?.data?.body?.token;
  } catch (err) {
    throw err;
  }
};

export const getUserInfos = async (token) => {
  try {
    const response = await axios.post(
      Profile_URL,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    return response?.data?.body;
  } catch (err) {
    throw err;
  }
};

export const updateUserInfos = async (token, editedFirstName, editedLastName) => {
  try {
    const response = await axios.put(
      Profile_URL,
      {
        firstName: editedFirstName,
        lastName: editedLastName,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response?.data?.body;
  } catch (err) {
    throw err;
  }
};
