import About from "@/components/Lyout/About";
import Contact from "@/components/Lyout/Contact";
import Home from "@/components/Lyout/Home";
import MySkill from "@/components/Lyout/MySkll";
import Project from "@/components/Lyout/Project";
import Services from "@/components/Lyout/Servece";

function HomePage() {
    return ( 
    <>
     <Home/>
     <About/>
     <Services/>
     <MySkill />
     <Project/>
     <Contact/>
     </> 
     );
}

export default HomePage;