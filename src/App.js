// import ListItem from "./Products/Listitems/ListItem";
import Products from "./Products/Products";
import Header from "./components/Layout/Header";
import Subheader from "./components/Layout/Subheader";
 import { Routes , Route } from "react-router-dom"

const App = () => {



  return (
    <div>
      <Header />
      <Subheader />
       <Routes>
        <Route exact path="/:category?" element={ <Products/>}>
         </Route> 
       </Routes> 
      
    </div>
  );
}

export default App;
