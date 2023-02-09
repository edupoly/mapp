import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MyComp from './MyComp';
import MyForm from './MyForm';
import Todolist from './Todolist';
import Countries from './Countries';
import CountryDetails from './CountryDetails';


const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/todolist',
                element:<Todolist/>
            },
            {
                path:'/countries',
                element:<Countries/>
            },
            {
                path:'/countryDetails/:x',
                element:<CountryDetails/>
            },
        ]
    },
    {
        path:'/myform',
        element:<MyForm></MyForm>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
