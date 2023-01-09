import "./GetUsers.css";
const GetUsers = ({ onSubmit, users }) => {
  return (
    <div className="body"> 
    <div className="card-container">
      <div className="card name ">
        <img src={users.picture && users.picture.large} alt="img" />
        <p>
          {users.name && users.name.first} {users.name && users.name.last}
        </p>
      </div>
      <div className="card">
        <p>Email: {users.email}</p>
      </div>
      <div className="card">
        <p>Phone: {users.phone}</p>
      </div>
      <div className="card">
        <p>
          Location: {users.location && users.location.city} /
          {users.location && users.location.country}
        </p>
      </div>
      <div className="card">
        <p> Age: {users.dob && users.dob.age}</p>
      </div>
      <div className="card">
        <p>
          Birthday :
          {new Date(users.dob && users.dob.date).toLocaleDateString("tr-TR")}
        </p>
      </div>
      <div>
        <button onClick={() => onSubmit()}>Random User</button>
      </div>
    </div>
    </div>
  );
};

export default GetUsers;
