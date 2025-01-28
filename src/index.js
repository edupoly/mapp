import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import "./index.css";
import QuizComponent from './QuizComponent';
import QuizList from './QuizList';
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
            path:'/quiz/:c',
            element:<QuizComponent></QuizComponent>
        },
        {
            path:'/categories',
            element:<QuizList></QuizList>
        }
      ]
    },

  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(

      <RouterProvider router={router} />

  );
