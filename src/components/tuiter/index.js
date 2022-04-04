import Tuit from "./tuit";
import {useState} from "react";

const TUITS = [
  {title: "Buy milk", complete: true, _id: "123"},
  {title: "Pick up kids", complete: true, _id: "234"},
  {title: "Feed dogs", complete: false, _id: "345"},
]
const Tuiter = () => {
  const [tuits, setTuits] = useState(TUITS);
  const [tuitTitle, setTuitTitle] = useState('New Tuit')
  const updateTuit = (updatedTuit) => {
    // alert('update tuit ' + updatedTuit.complete)
    const newTuits = tuits.map((tuit) => {
      if(tuit._id === updatedTuit._id) {
        return updatedTuit;
      } else {
        return tuit;
      }
    });
    setTuits(newTuits);
  }
  const createTuit = () => {
    const newTuit = {
      title: tuitTitle,
      complete: false,
      _id: (new Date()).getTime() + ""
    };
    const newTuits = [newTuit, ...tuits];
    setTuits(newTuits);
  }
  const deleteTuit = (tuitToDelete) => {
    const newTuits = tuits.filter(tuit =>
      tuit === tuitToDelete ? false : true);

    setTuits(newTuits)
  }
  return(
    <div>
      <h1>Tuiter</h1>
      <input value={tuitTitle}
             onChange={(event) => {
               setTuitTitle(event.target.value)
             }}
             className="form-control w-75 d-inline"/>
      <button className="btn float-end btn-success" onClick={createTuit}>
        Tuit
      </button>
      <ul className="list-group">
        {
          tuits.map(tuit =>
            <Tuit tuit={tuit}
                  updateTuit={updateTuit}
                  removeTuit={deleteTuit}
                  due="tomorrow"/>
          )
        }
      </ul>
    </div>
  );
};
export default Tuiter;