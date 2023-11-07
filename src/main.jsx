import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memo/Memorize";
// import { MemoHook } from "./06-memo/MemoHook";
import { CallBackHook } from "./06-memo/CallBackHook";
import { Padre } from "./07-tarea-memo/Padre";
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/counterWithCustomHook";
// import "./08-useReducer/intro-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { Main } from "./09-useContext/Main";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <HooksApp></HooksApp> */}
      {/* <CounterApp></CounterApp> */}
      {/* <SimpleForm /> */}
      {/* // <FormWithCustomHook></FormWithCustomHook> */}
      {/* <MultipleCustomHooks></MultipleCustomHooks> */}
      {/* <FocusScreen></FocusScreen> */}
      {/* <Layout></Layout> */}
      {/* <Memorize></Memorize> */}
      {/* <MemoHook></MemoHook> */}
      {/* <CallBackHook></CallBackHook> */}
      {/* <Padre></Padre> */}
      {/* <TodoApp></TodoApp> */}
      <Main></Main>
    </React.StrictMode>
  </BrowserRouter>
);
