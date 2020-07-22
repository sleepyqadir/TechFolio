/*=====================
    This is the Context used to switch between section in techfolio
==========================*/
import React, { createContext, useReducer } from "react";
const initialState = {
  current: null,
};
const ScrollContext = createContext({
  current: "null",
  scrollChange: () => {},
});

function ScrollReducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
}

function ScrollProvider(props) {
  const [state, dispatch] = useReducer(ScrollReducer, initialState);

  function scrollChange(current) {
    dispatch({
      type: "CHANGE",
      payload: current,
    });
  }

  return (
    <ScrollContext.Provider
      value={{ current: state.current, scrollChange }}
      {...props}
    />
  );
}

export { ScrollContext, ScrollProvider };
