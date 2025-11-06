
import App from "@/components/Lyout/App";
import { Blog7 } from "@/components/modules/abuPage/aboutme";
import Cive from "@/components/modules/abuPage/Cive";
import AboutPage from "@/pages/AbuotPage";
import { Contact7 } from "@/pages/contactPage";
import HomePage from "@/pages/HomePage";
import MySkillPage from "@/pages/MySkllPage";
import ProjectPage from "@/pages/ProjectPage";
import ServicesPage from "@/pages/ServecePage";
import { createBrowserRouter } from "react-router";



 const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
        {
            index:true,
            Component:HomePage
        },
        {
            path: "/about",
            Component:AboutPage
        },
        {
            path: "/services",
            Component:ServicesPage
        },
        {
            path: "/myskill",
            Component:MySkillPage
        },
          {
            path: "/project",
            Component:ProjectPage
        },
         {
            path: "/project7",
            Component: Contact7
        },
        {
            path: "/CivePage",
            Component: Cive
        },
        {
            path: "/Blog7Page",
            Component: Blog7
        },
    ]
  },
]);


export default router;