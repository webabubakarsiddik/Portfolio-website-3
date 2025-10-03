
import Header from '@/components/Lyout/Header'
import './index.css'
import Foter from '@/components/Lyout/Foter'
import { Outlet } from 'react-router'







function App() {
 
  return (
    <>
     <Header/>
    <Outlet />
      <Foter/>
    </>
  )
}

export default App