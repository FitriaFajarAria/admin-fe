import React, { useState, useEffect } from 'react'
import '../styles/UserList.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("https://menthy.herokuapp.com/user");
    console.log(response.data)
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`https://menthy.herokuapp.com/user/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <button onClick={getUsers} className="button is-success">
        <Link to={`add`} className="button is-success">
          Create User
        </Link>
        </button>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>No_handphone</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.no_handphone}</td>
                <td>{user.role}</td>
                <td>
                  <Link
                    to={`edit/${user.id}`}
                    className="button is-small is-info mr-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="button is-small is-danger">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default UserList