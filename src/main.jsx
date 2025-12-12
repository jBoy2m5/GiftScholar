import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Champion from './Components/Navbar/Champion.jsx'
import GameKnowledge from './Components/Navbar/GameKnowledge.jsx'
import Home from './Components/Navbar/Home.jsx'
import Items from './Components/Navbar/Items.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home />},
      {path: "champion", element: <Champion />},
      {path: "gameknowledge", element: <GameKnowledge />},
      {path: "items", element: <Items />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
