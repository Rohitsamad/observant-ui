import apiUrl from '../config/api';

export const createUser = (idToken) => fetch(`${apiUrl}/user/`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    idToken,
  }),
}).then((response) => response.json());

export const fetchUser = (idToken, id) => fetch(`${apiUrl}/user/${id}`, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${idToken}` },
}).then((response) => response.json());
