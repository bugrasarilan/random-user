import searchUsers from "./api";
import { useEffect, useState } from "react";
import GetUsers from "./components/GetUsers";

function App() {
  const [users, setUsers] = useState([]);
  const handleSubmit = async () => {
    const result = await searchUsers();
    setUsers(result.data.results[0]);
    console.log(result.data.results[0]);
  };
  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <GetUsers users={users} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
