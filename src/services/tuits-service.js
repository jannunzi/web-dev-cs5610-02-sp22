import axios from "axios";

export const findAllTuits = async (dispatch) => {
  const response = await axios.get('http://localhost:4000/api/tuits');
  console.log(response.data);
  dispatch({
    type: 'FIND_ALL_TUITS',
    tuits: response.data
  })
}

export const createNewTuit = async (dispatch, tuit) => {
  const response = await axios.post('http://localhost:4000/api/tuits', tuit);
  dispatch({
    type: 'CREATE_NEW_TUIT',
    tuit: response.data
  })
}

export const deleteTuit = async (dispatch, tuit) => {
  const response = await axios.delete(`http://localhost:4000/api/tuits/${tuit._id}`);
  dispatch({
    type: 'DELETE_TUIT',
    tuit
  })
}

export const updateTuit = async (dispatch, updatedTuit) => {
  const response = await axios.put(`http://localhost:4000/api/tuits/${updatedTuit._id}`, updatedTuit);
  dispatch({
    type: 'UPDATE_TUIT',
    updatedTuit
  })
}