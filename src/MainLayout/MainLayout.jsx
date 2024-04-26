import { Outlet } from "react-router-dom/dist";
import NavBar from "../Header/NavBar";
import TopHeader from "../Header/TopHeader";
import ScrollToTop from "../PagesTwo/ScrollToTop/ScrollToTop";
import Footer from "../Footer/Footer";

export default function MainLayout() {
  return (
   <div>

    <ScrollToTop/>
    
    <header>
        <TopHeader/>
    </header>
    <header className="" >
        <NavBar/>
    </header>
    <main className="" >
        <Outlet/>
    </main>
    <footer>
        <Footer/>
    </footer>

   
   </div>
  )
}
