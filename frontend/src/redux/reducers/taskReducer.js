const INITIAL_STATE = {
  updated: true,
};

const taskReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_UPDATE':
      return {
        ...state,
        updated: !state.updated
      }
    default: 
      return state;
  }
}

export default taskReducer;
