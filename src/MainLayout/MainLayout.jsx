import { Outlet, useNavigation } from "react-router-dom/dist";
import NavBar from "../Header/NavBar";
import TopHeader from "../Header/TopHeader";
import ScrollToTop from "../PagesTwo/ScrollToTop/ScrollToTop";
import Footer from "../Footer/Footer";
import Spinner from "../PagesTwo/Spinner/Spinner";

export default function MainLayout() {
    const navigation = useNavigation()
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
        {
            navigation.state ==="loading" ? <Spinner/> : <Outlet/>
        }
    </main>
    <footer>
        <Footer/>
    </footer>

   
   </div>
  )
}
