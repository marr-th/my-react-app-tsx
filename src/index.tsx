import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import UserAccount from './pages/UserAccount';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { paths } from './constants/paths';


const router = createBrowserRouter([
  {
    path: paths.home,
    element: <App/>,
  },
  {
    path: paths.register,
    element: <Register/>,
  },
  {
    path: paths.login,
    element: <Login/>,
  },
  {
    path: paths.userAccount,
    element: <UserAccount/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider fallbackElement={<App/>} router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
