import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPhotos } from '../api/Api';

function Photos() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos(albumId)
      .then((response) => setPhotos(response.data))
      .catch((error) => console.error(error));
  }, [albumId]);

  return (
    <div>
      <h1>Список фотографій</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            {photo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Photos;