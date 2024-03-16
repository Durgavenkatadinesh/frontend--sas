  import './App.css'
  import Nav from './Nav'
  import Attandance from './Attandance'
  import Footer from './Footer'
  import Login from './components/Login'
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
  import Home from './components/Home'
  import Student_Data from './components/Student_Data'

  function App() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/studentData" element={<Student_Data/>}/>
          </Routes>
          <Footer />
        </div>
      </Router>
    )
  }

  export default App
