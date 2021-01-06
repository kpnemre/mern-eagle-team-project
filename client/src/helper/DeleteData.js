import axios from "axios";

export const deleteData = async (path, id) => {
  
  const token = localStorage.getItem("token");
  // console.log("token", token);
  const response = await axios.delete(`${path}`, id, {
    headers: {
      token,
    },
  });
  // console.log('RESPONSE', response?.data)
  return response?.data;
};