import { Route, Routes } from "react-router-dom";
import DishList from "./components/DishList";
import DishDetales from "./components/DishDetales";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";


function App() {

 

  return (
    <div>
      <Navbar/>
      <div className ="bg-amber-50 h-full flex justify-center">
        <div className=" lg:w-2/3 w-11/12">
          <Routes >
            <Route path="/" element={<DishList/>}/>
            <Route path="/meal/:idMeal" element={<DishDetales/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
