import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../api/Api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.length === 0 ? (
          <li>Loading...</li>
        ) : (
          users.map((user) => (
            <li key={user.id}>
              {user.name}
              <Link to={`/users/${user.id}/albums`}>Albums</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Users;