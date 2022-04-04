const TUITS = [];

const tuiterReducer = (state = {tuits: TUITS}, action) => {
  switch (action.type) {
    case "DELETE_TUIT":
      return {
        tuits: state.tuits.filter(t => t._id !== action.tuit._id)
      }
    case "CREATE_NEW_TUIT":
      return {
        tuits: [
          action.tuit,
          ...state.tuits
        ]
      }
    case "FIND_ALL_TUITS":
      return {
        tuits: action.tuits
      }
    case "UPDATE_TUIT":
      return {
        tuits: state.tuits.map(t => t._id === action.updatedTuit._id ? action.updatedTuit : t)
      }
    default:
      return state;
  }
  // return(
  //   {tuits: TUITS}
  // );
};

export default tuiterReducer;