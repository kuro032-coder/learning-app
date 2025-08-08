import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import QuestionForm from './pages/QuestionForm'
import QuizPlayer from './pages/QuizPlayer'
import QuestionList from './pages/QuestionList'

function App() {

  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/question-form' element={< QuestionForm />} />
        <Route path='/quiz-player-form' element={< QuizPlayer />} />
        <Route path='/question-list-form' element={< QuestionList />} />

      </Routes>
    // </BrowserRouter>
  )
}

export default App
