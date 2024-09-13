export const initialDataState = {
  data: null,
  loading: null,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_DATA_ERROR":
      return { ...state, loading: false, error: action.pyload };

    default:
      return state;
  }
};

export default dataReducer;