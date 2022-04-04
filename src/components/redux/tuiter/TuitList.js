import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {useEffect, useState} from "react";
import * as tuitService from "../../../services/tuits-service"

const TuitList = () => {
  const tuits = useSelector(state => state.tuits)
  const [newTuit, setNewTuit] =
    useState({tuit: 'New Tuit', likes: 0});

  const dispatch = useDispatch();
  const findAllTuits = async () => {
    tuitService.findAllTuits(dispatch);
  }

  const createNewTuit = () => {
    tuitService.createNewTuit(dispatch, newTuit);
  }

  const deleteTuit = (tuit) => {
    tuitService.deleteTuit(dispatch, tuit);
  }

  const updateTuit = (updatedTuit) => {
    tuitService.updateTuit(dispatch, updatedTuit);
  }

  useEffect(() => {
    findAllTuits();
  }, [])

  return(
    <div>
      <h2>Tuit List</h2>
      <input
        value={newTuit.tuit}
        onChange={(e) => setNewTuit({...newTuit, tuit: e.target.value})}/>
      <button onClick={createNewTuit}>Tuit</button>
      {
        tuits.map(tuit =>
          <li>
            {tuit.tuit}
            <button onClick={() => deleteTuit(tuit)}>Delete</button>
            <div>
              Likes: {tuit.likes}
              <button onClick={() => {
                updateTuit({...tuit, likes: tuit.likes + 1})
              }}>Like</button>
            </div>
          </li>
        )
      }
    </div>
  )
}
export default TuitList;