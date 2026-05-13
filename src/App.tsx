import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ModulePage from './pages/Module'
import LessonPage from './pages/Lesson'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":moduleId" element={<ModulePage />} />
        <Route path=":moduleId/:lessonId" element={<LessonPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
