import About from "@/components/modules/About";
import Home from "@/components/modules/Home";
import MySkill from "@/components/modules/MySkll";
import Project from "@/components/modules/Project";
import Services from "@/components/modules/Servece";

function HomePage() {
    return ( 
    <>
     <Home/>
     <About/>
     <Services/>
     <MySkill />
     <Project/>
     </> 
     );
}

export default HomePage;