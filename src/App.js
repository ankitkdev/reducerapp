// import { useEffect, useReducer } from "react";
// import axios from "axios";
import "./App.css";
// import Main from "./Main";
import UseReducer from "./UseReducer";

// const initialstate = {
//   loading: true,
//   error: "",
//   data: [],
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SUCCESS":
//       return {
//         loading: false,
//         error: "",
//         data: action.payload,
//       };
//     default:
//       return state;
//   }
// };

function App() {
  // const [state, dispatch] = useReducer(reducer, initialstate);
  // console.log(state)
  // useEffect(() => {
  //   axios.get("https://api.adviceslip.com/advice").then((res) => {
  //     console.log(res);
  //     dispatch({ type: "SUCCESS", payload: res.data });
  //   });
  // }, []);
  return <UseReducer/>;
}
export default App;
