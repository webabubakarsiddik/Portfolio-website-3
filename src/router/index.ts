import App from "@/App";
import AboutPage from "@/pages/AbuotPage";
import ContactPage from "@/pages/ContactPage";
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
            path: "/",
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
            path: "/Contact",
            Component:ContactPage
        },
    ]
  },
]);


export default router;