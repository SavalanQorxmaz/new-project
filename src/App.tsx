
import Header from "./components/Header";
import { setScreen } from "./redux/screenSlice";
import { useDispatch } from 'react-redux'



function App() {


  const dispatch = useDispatch()

  // EKRAN OLCUSUNU MUEYYEN ETMEK UCUN
  window.addEventListener('resize', () => {
    dispatch(setScreen(document.documentElement.offsetWidth))
  })


  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
