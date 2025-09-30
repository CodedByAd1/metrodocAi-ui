import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import DocumentCapture from './components/DocumentCapture'
import DocumentDetail from './components/DocumentDetail'
import SearchInterface from './components/SearchInterface'
import UserProfile from './components/UserProfile'
import BottomNavigation from './components/BottomNavigation'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/capture" element={<DocumentCapture />} />
            <Route path="/document/:id" element={<DocumentDetail />} />
            <Route path="/search" element={<SearchInterface />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </main>
        <BottomNavigation />
      </div>
    </Router>
  )
}

export default App
