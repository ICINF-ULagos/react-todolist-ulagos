import React from "react";
import HomeScreen from './screens/home/home'
import Taskboard from './screens/taskboard/Taskboard';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/"element ={<HomeScreen />}></Route>
      <Route path="/Taskboard" element={<Taskboard />} />
    </>
  )
);
function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
