

import React from 'react'

import Layout from './Layout/Layout'
import About from './About/About'
import Contact from './Contact/Contact'
import Notfound from './Notfound/Notfound'
import Portfolio from './Portfolio/Portfolio'



import Home from './Home/Home'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

export default function App() {
  let route =createBrowserRouter([
    {path:'',element:<Layout></Layout>,children:([
      {index:true,element:<Home></Home>},
      {path:'about',element:<About></About>},
      {path:'portfolio',element:<Portfolio></Portfolio>},
      {path:'contact',element:<Contact></Contact>},
      {path:'home',element:<Home></Home>},
      {path:'*',element:<Notfound></Notfound>}
    
    ])}
  ])
  return (
    <div>
      

<RouterProvider router={route}></RouterProvider>
    </div>
  )
}
