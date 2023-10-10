const userURL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return fetch(`${userURL}/users`).then((response) => response.json());
};

export const getAlbums = (userId) => {
  return fetch(`${userURL}/users/${userId}/albums`).then((response) => response.json());
};

export const getPhotos = (albumId) => {
  return fetch(`${userURL}/albums/${albumId}/photos`).then((response) => response.json());
};