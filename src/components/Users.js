import  { useState, useEffect } from "react";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from "firebase/firestore";
import db from "../firebase";

const Users = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [surname, setSurname] = useState("");
  const[email, setEmail] = useState("");
  const[status, setStatus] = useState("");


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const handleCreate = async () => {
    await addDoc(collection(db, "users"), { name ,surname,age, email,status});
    setName("");
    setAge("");
    setSurname("");
    setEmail("");
    setStatus("");
    fetchUsers();
  };

  const handleUpdate = async (id) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, { name ,surname,age, email,status});
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "users", id));
    fetchUsers();
  };

  return (
    <div>
      <h2>Users</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
     
      <input
        type="text"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        placeholder="Enter surname"
      />
       <input
      type="number"
      value={age}
      onChange={(e) => setAge(e.target.value)}
      placeholder="Enter your age"
      />
       <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter ur email"
      />
      <input
        type="text"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        placeholder="Enter status"
      />
      <button onClick={handleCreate}>Add</button>

      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} {user.surname} {user.age} {user.email} - {user.status}
            
            <button onClick={() => handleUpdate(user.id)}>Update</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;