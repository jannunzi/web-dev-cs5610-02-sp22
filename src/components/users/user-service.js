import axios from "axios";

const USERS_API = 'http://localhost:4000/api/users'

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API)
  return response.data
}
export const findUserById = async (id) => {}
export const findUserByEmail = async (email) => {}
export const findUserByCredentials = async (credentials) => {}
export const createUser = async (user) => {
  const response = await axios.post(USERS_API, user)
  return response.data
}
export const updateUser = async (id, user) => {
  const response = await axios.put(`${USERS_API}/${id}`, user)
  return response.data
}
export const deleteUser = async (id) => {
  const response = await axios.delete(`${USERS_API}/${id}`)
  return response.data
}