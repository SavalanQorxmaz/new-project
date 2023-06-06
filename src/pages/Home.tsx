import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'
import { selectScreenSize } from '../redux/screenSlice'
import SliderRotateMethod from '../components/SliderRotateMethod'
import SliderTranslateMethod from '../components/SliderTranslateMethod'

const Home = () => {

  
  const dispatch = useDispatch()
  const selectedTheme = useSelector(selecTheme)
  return (
    <>
       
<section className={selectedTheme === 'dark' ? ' py-20  text-cyan-50   bg-cyan-950   ' : ' py-20 text-cyan-950   bg-cyan-50 '}>
    
    <div className='container'>
    
    <SliderRotateMethod/>
    
        </div>
    </section > 

    <section className={selectedTheme === 'dark' ? ' py-20  text-sky-50   bg-sky-950   ' : ' py-20 text-sky-950   bg-sky-50 '}>

      <SliderTranslateMethod/>

    </section>
        
   </>
  )
}

export default Home