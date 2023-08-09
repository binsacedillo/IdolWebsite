import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Members } from './pages/Members';
import { Music } from './pages/Music';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='About' element={ <About />} />
        <Route path='Members' element={ <Members />} />
        <Route path='Music' element={ <Music />} />
      </Routes>
    </>
  )
}

export default App
