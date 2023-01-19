import { ColorsBody } from 'component/ColorsBody'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ColorsBody />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
