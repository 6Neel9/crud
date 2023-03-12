import Header from './components/Header'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Edit from './components/Edit'
import Add from './components/Add'

function App() {
  return (
    <>
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />

        </Routes>


    </>
  )
}
export default App
