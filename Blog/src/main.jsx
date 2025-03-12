import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout, Login, Signup } from './Component/index.js'
import Allpost from './pages/Allpost.jsx'
import Addpost from './pages/Addpost.jsx'
import EditPost from './pages/EditPost.jsx'
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication = {false}>
            <Login/>
          </AuthLayout>
        )
      },{
        path:'/signup',
        element:(
          <AuthLayout authentication= {false}>
              <Signup />
          </AuthLayout>
        )
      } , 
      {
        path:"/all-post",
        element:(
          <AuthLayout authentication>
             { " " }
             <Allpost />
          </AuthLayout>
        )
      },
      {
        path:"add-post",
        element:(
          <AuthLayout>
            { " " }
             <Addpost />
          </AuthLayout>
        )
      },
      
        {
          path:"edit-post/:slug",
          element:(
            <AuthLayout>
              { " " }
               <EditPost />
            </AuthLayout>
          )
        },
        {
          path:"post/:slug",
          element:<Post />
        }
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
