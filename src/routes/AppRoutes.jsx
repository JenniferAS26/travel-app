import { Routes, Route } from 'react-router-dom'
import Welcome from '../pages/Welcome'
import Home from '../pages/Home'
import Detail from '../pages/Detail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='welcome' element={<Welcome />} />
      <Route path='/' element={<Home />} />
      <Route path='detail' element={<Detail />} />
    </Routes>
  )
}

export default AppRoutes
