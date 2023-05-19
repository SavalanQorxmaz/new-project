import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, selecTheme } from '../redux/themeSlice'
import { selectScreenSize } from '../redux/screenSlice'

const Header = () => {

    const dispatch = useDispatch()
    const selectedTheme = useSelector(selecTheme)


    // TEMANI DEYISMEK UCUN FUNKSIYA
    const ChangeThemeF = (e:any) => {
        if(selectedTheme === 'light'){
            e.target.innerText = 'Light'
            dispatch(setTheme('dark'))
        }

        else {
            e.target.innerText = 'Dark'
            dispatch(setTheme('light'))  
        }
    }


  return (
    <div className={selectedTheme === 'dark' ? 'w-full h-20 text-white bg-zinc-900 sm:bg-red-400 container sm:w-[100em]' : 'w-full h-20 text-black bg-white'}>
        

        <button onClick={ChangeThemeF}>{selectedTheme}</button>

    </div>
  )
}

export default Header