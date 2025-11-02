
import Header from '@/components/modules/Header'
import { Outlet } from 'react-router'
import Foter from '@/components/modules/Foter'


function App() {
 
  return (
    <>
    <div className=" flex flex-col min-h-screen">
        <Header/>
    <div className="flex-1">
         <Outlet/>
    </div>
    <div className=" fixed">
      <Foter/>
    </div>  
    </div>
    </>
  )
}

export default App