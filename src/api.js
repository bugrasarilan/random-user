import axios from "axios";

const searchUsers = async () => {
  const response = await axios.get("https://randomuser.me/api/")
  console.log("response",response.data.results[0]);
   return response;
};
export default searchUsers;
