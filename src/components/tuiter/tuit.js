const Tuit = ({tuit, updateTuit, removeTuit}) => {
  return(
    <li className="list-group-item">
      <input
        onClick={(event) =>
          updateTuit({...tuit, complete: event.target.checked})
        }
        checked={tuit.complete}
        type="checkbox"/>
        <input onChange={(event) => updateTuit({
          ...tuit, title: event.target.value
        })
        } value={tuit.title}/>
      <button className="btn btn-danger float-end" onClick={() => removeTuit(tuit)}>Delete</button>
    </li>
  );
};
export default Tuit;