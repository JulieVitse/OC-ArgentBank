import React from 'react'
/* router */
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
/* styles */
import './App.css'
/* components */
import { Layout } from './layout/Layout/Layout'
import { Account } from 'pages/Account/Account'
import { Home } from 'pages/Home/Home'
import { Login } from 'pages/Login/Login'
import { AuthGuard } from 'components/AuthGuard/AuthGuard'
import { NoAuthGuard } from 'components/NoAuthGuard/NoAuthGuard'


function App() {
  
  return (
    <React.Fragment>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<AuthGuard Child={Account} />} />
            <Route path="/login" element={<NoAuthGuard Child={Login} />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
