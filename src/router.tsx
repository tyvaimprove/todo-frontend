import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Todo from './pages/Todo'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Todo /> }
    ],
  },
])