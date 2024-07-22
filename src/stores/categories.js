export function loadCategories() {
  return function (dispatch) {
    fetch('https://run.mocky.io/v3/2205b6dc-5252-49e1-8a97-e486fc69fb8a')
    .then((res) => { return res.json() })
    .then((res) => {
      dispatch({ type: "LOAD_CATEGORIES_DONE", payload: res })
      // setCategories(res)
    });
  }
};

function categoriesReducer(state = { categories: [], status: true }, action) {
  switch (action.type) {
    case "LOAD_CATEGORIES_LOADING": {
      return {
        ...state,
        status: true
      }
    }
    case "LOAD_CATEGORIES_DONE": {
      return {
        ...state,
        categories: action.payload,
        status: false
      }
    }
    default:
      return state;
  }
}

export default categoriesReducer;