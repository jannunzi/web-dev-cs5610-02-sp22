const helloReducer = (state, action) => {
  switch (action.type) {
    case 'change message':
      return (
        {message: action.newMessage}
      )
    default:
      return (
        {message: 'Hello World'}
      );
  }
};
export default helloReducer;