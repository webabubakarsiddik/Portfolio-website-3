
import Contact from '@/components/modules/Contact'
import Header from '@/components/modules/Header'
import { Outlet } from 'react-router'


function App() {
 
  return (
    <>
        <Header/>
         <Outlet/>
        <Contact/>

    </>
  )
}

export default App