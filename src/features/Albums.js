import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getAlbums } from '../api/Api';

function Albums() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums(userId)
      .then((response) => setAlbums(response.data))
      .catch((error) => console.error(error));
  }, [userId]);

  return (
    <div>
      <h1>Список альбомів</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            {album.title}
            <Link to={`/users/${userId}/albums/${album.id}/photos`}>Photos</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Albums
