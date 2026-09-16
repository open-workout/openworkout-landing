import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Exercises from './pages/Exercises'
import Privacy from './pages/Privacy'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/:id" element={<ProgramDetail />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  )
}
