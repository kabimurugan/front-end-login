import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Success from './Success'
import Fail from './Fail'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Login/> } ></Route>
      <Route path='/success' element={ <Success/> } ></Route>
      <Route path='/fail' element={ <Fail/> } ></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
