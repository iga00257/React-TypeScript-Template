import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './containers/Layout'
const router = createBrowserRouter([
  {
    path: '/*', // 基本Layout
    element: <Layout />
  }

])

function App () {
  return (
      <RouterProvider router={router} />
  )
}

export default App
