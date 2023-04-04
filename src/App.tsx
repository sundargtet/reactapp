import { Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import QuoteDetails from './pages/quote-details'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:quoteId' element={<QuoteDetails />} />
    </Routes>
  )
}

export default App
