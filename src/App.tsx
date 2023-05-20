
import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header";
import { setScreen } from "./redux/screenSlice";
import { useDispatch } from 'react-redux'
import Home from './Home';



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
 </Routes>
 </>
  );
}

export default App;
