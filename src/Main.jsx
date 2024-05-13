import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import RoadDetails from './RoadDetails';

const Main = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route>
            <Route path='/' element={ <App /> } />
            <Route path='road/:id' element={ <RoadDetails /> } />
        </Route>
    ))
  return (
    <RouterProvider router={router} />
  )
}

export default Main