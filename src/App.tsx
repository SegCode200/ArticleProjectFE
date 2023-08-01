import React from 'react'
import { RouterProvider } from "react-router-dom";
import { mainRoute } from './route/mainRoute';

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute}/>

    </div>
  )
}

export default App