import { Outlet } from "react-router-dom/dist";
import NavBar from "../Header/NavBar";
import TopHeader from "../Header/TopHeader";

export default function MainLayout() {
  return (
   <>
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

    </footer>

   
   </>
  )
}
