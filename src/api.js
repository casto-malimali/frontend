import axios from 'axios';

const APP_BASE_URL = 'http://localhost:4000/api';

export const registerVoter = (emailorPhone) => {
  return axios.post(`${APP_BASE_URL}/voters/register`, { emailorPhone });
};

export const loginAdmin = (email, password) => {
  return axios.post(`${APP_BASE_URL}/admin/login`, { email, password });
};

export const addCandidate = (token, candidate) => {
  return axios.post(`${APP_BASE_URL}/admin/candidates`, candidate, {
    headers: { Authorization: `Bearer ${token}` }, 
  });
};

export const getCandidates = () => {
  return axios.get(`${APP_BASE_URL}/candidates`);
};

export const vote = (voterId, candidateId) => {
  return axios.post(`${APP_BASE_URL}/voters/vote`, { voterId, candidateId });
};

export const getResults = (token) => {
  return axios.get(`${APP_BASE_URL}/admin/results`, {
    headers: { Authorization: `Bearer ${token}` }, // Use template literal for token
  });
};
