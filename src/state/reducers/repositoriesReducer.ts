const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "search_repositories":
        return {...state, error: null, data: [], loading: true}
    case "search_repositories_success":
        return {...state, loading: false, error: null, data: action.payload}
    case "search_repositories_error":
        return {...state, loading: false, data: [], error: action.payload}
    default:
      return state;
  }
};

export default reducer;
