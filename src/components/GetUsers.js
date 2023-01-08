import "./GetUsers.css";
const GetUsers = ({ onSubmit, users }) => {
  return (
    <div className="card-container">
      <div className="card name ">
        <img src={users.picture && users.picture.large} alt="img" />
        <p>
          {users.name && users.name.first} {users.name && users.name.last}
        </p>
      </div>
      <div className="card">
        <p>{users.email}</p>
      </div>
      <div className="card">
        <p>{users.phone}</p>
      </div>
      <div className="card">
        <p>
          {users.location && users.location.city} /
          {users.location && users.location.country}
        </p>
      </div>
      
    <div className="card"> <p> Age: {users.dob&&users.dob.age}
      </p></div>
    <div className="card">
      <p> Register Date: {new Date(users.dob&&users.dob.date).toLocaleDateString("tr-TR")}</p>
    </div>
 
      <div>
        <button onClick={() => onSubmit()}>get user</button>
      </div>
    </div>
  );
};

export default GetUsers;
