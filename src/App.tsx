
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import { setScreen } from "./redux/screenSlice";
import { useDispatch } from 'react-redux'
import Home from './pages/Home';
import Sudoku from './pages/Sudoku';



function App() {


  const dispatch = useDispatch()

  // EKRAN OLCUSUNU MUEYYEN ETMEK UCUN
  window.addEventListener('resize', () => {
    dispatch(setScreen(document.documentElement.offsetWidth))
  })


  return (
 <>
  <Header />
 <Routes>
<Route path ='/'    element={<Home/>}/>
<Route path ='/sudoku'    element={<Sudoku/>}/>
 </Routes>
 </>
  );
}

export default App;
