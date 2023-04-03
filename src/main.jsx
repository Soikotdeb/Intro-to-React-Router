import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetail/FriendDetails';
import Post from './components/Post/Post';
import PostDetails from './components/PostDetails/PostDetails';


// simple route 
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<App></App>
//   },
//   {
//     path:'/about',

//     element:<About></About>
//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>
//   }
// ])


// good use purpose
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'about',
        element:<About></About>
      },
      {
path:'friends',
element:<Friends></Friends>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
path:'friend/:friendId',
element:<FriendDetails></FriendDetails>,
loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
path:'post',
element:<Post></Post>,
loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'contact',
        element:<Contact></Contact>

      },
      {
path:'post/:postId',
element:<PostDetails></PostDetails>,
loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header></Header> */}
     <RouterProvider router={router} />   
  </React.StrictMode>,
)
