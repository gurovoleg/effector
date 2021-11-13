import React from 'react'
import Users from '../users/users'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createError } from '../../models/error'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { StyledPage, RadixUiPage } from '../../pages/index'

const toastConfig = {
  limit: 3,                                                // Количество одновременно выводимых уведомлений
  position: 'bottom-right',                                // Расположение уведомления
  autoClose: 2000,                                         // Время отображение уведомления в ms
}

function App() {
  return (
    <div>
      {/* test buttons */}
      {/*<button onClick={() => createError('New error')}>Show error</button>*/}
      {/*<button onClick={() => createError()}>Show default error</button>*/}
      <ToastContainer {...toastConfig} />

      <BrowserRouter>
        <Link to="/" style={{ marginRight: '10px' }}>Main</Link>
        <Link to="/styled" style={{ marginRight: '10px' }}>Styled</Link>
        <Link to="/radix-ui">Radix-ui</Link>

        <Routes>
          <Route path="/styled" element={<StyledPage/>} />
          <Route path="/radix-ui" element={<RadixUiPage/>} />
          <Route path="/" element={<Users/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
