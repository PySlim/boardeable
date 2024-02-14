import React from 'react'
import ReactDOM from 'react-dom/client'
import './core/styles/index.css'
import AuthProvider from "./core/contexts/authcontext/auth.provider.tsx";
import {router} from "./router.tsx";
import { RouterProvider } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
  </React.StrictMode>,
)
