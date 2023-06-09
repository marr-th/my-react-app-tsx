import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Register from './pages/Register';
import Login from './pages/Login';
import reportWebVitals from './reportWebVitals';
import store from './store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { paths } from './constants/paths';
import Header from './components/Header';
import { ErrorBoundary } from './components/ErrorBoundary';


const router = createBrowserRouter([
  {
    path: paths.home,
    element: <Login />,
  },
  {
    path: paths.register,
    element: <Register />,
  },
  {
    path: paths.login,
    element: <Login />,
  },
  {
    path: paths.userAccount,
    Component: () => <Register disabled />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Header />
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
