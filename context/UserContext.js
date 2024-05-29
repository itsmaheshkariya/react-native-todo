import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const addUser = (user) => {
    axios.post('http://localhost:3000/users', user)
      .then(response => setUsers([...users, response.data]))
      .catch(error => console.error(error));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(error => console.error(error));
  };

  const updateUser = (updatedUser) => {
    axios.put(`http://localhost:3000/users/${updatedUser.id}`, updatedUser)
      .then(response => setUsers(users.map(user => user.id === updatedUser.id ? response.data : user)))
      .catch(error => console.error(error));
  };

  return (
    <UserContext.Provider value={{ users, addUser, deleteUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
