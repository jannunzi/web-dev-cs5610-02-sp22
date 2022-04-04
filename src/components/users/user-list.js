import React, {useEffect, useRef, useState} from 'react';
import * as service from "./user-service"

const UserList = () => {
  const userEmailRef = useRef()
  const [users, setUsers] = useState([])
  const findAllUsers = async () => {
    const users = await service.findAllUsers();
    setUsers(users)
  }
  const deleteUser = async (userId) => {
    const status = await service.deleteUser(userId)
    const newUsers = users.filter(user => user._id !== userId)
    setUsers(newUsers)
  }
  const createUser = async () => {
    const newUser = {
      email: userEmailRef.current.value,
      password: userEmailRef.current.value
    }
    const insertedUser = await service.createUser(newUser)
    const newUsers = [
      ...users,
      insertedUser
    ]
    setUsers(newUsers)
  }
  useEffect(() => {
    findAllUsers()
  }, [])
  return (
    <div>
      <h1>User List</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <button
            onClick={() => createUser()}
            className="float-end btn btn-primary">Create</button>
          <input ref={userEmailRef} className="form-control w-75"/>
        </li>
        {
          users.map(user =>
          <li key={user._id} className="list-group-item">
            <span
              onClick={() => deleteUser(user._id)}
              className="float-end">&times;</span>
            {user.email}
          </li>
          )
        }
      </ul>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default UserList;