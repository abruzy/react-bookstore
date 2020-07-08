const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filter;
