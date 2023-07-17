import React from "react";
import { createContext, useReducer } from "react";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

export const ScheduleContext = createContext();

// const initialState = {
//   start_time: Date().toLocaleString(),
//   end_time: Date().toLocaleString(),
//   activity: "",
// };

// const editSchedule = (state = initialState, action) => {
//   switch (action.type) {
//     case "TRUE":
//       return {
//         ...state,
//         start_time: action.payload.start_time,
//         end_time: action.payload.end_time,
//         activity: action.payload.activity,
//       };
//     default:
//       return state;
//   }
// };

// const displaySchedule = (props) => {
//   return (
//     <div class="schedule">
//       <p>Daily Schedule</p>
//       <div class="schedule-details">
//         <div class="schedule-timeline">
//           <span class="time">${props.start_time}</span>
//           {/* Dash Dash */}
//           <span class="time">${props.end_time}</span>
//         </div>
//         <div class="schedule-lists">
//           <p>${props.activity}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      // Data Storage
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      // localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ScheduleContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">{!state.isAuthenticated ? <Home /> : <Home />}</div>
    </ScheduleContext.Provider>
  );
}
export default App;
