const initialState = {
  start_time: Date().toLocaleString(),
  end_time: Date().toLocaleString(),
  activity: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_TRUE":
      return {
        ...state,
      };
  }
};
