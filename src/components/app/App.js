
import { BrowserRouter as Router, Route , Routes, } from "react-router-dom";

//import {MainPage ,ComicsPage} from '../pages';

import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import Page404 from "../pages/404";
import SingleComicsPage from "../pages/SingleComicsPage";




import AppHeader from "../appHeader/AppHeader";


const App = () =>  {
    

        return (
            <Router>
            <div className="app">
                    <AppHeader/>
                            <main>
                             <Routes>
                             <Route path="*" element={<Page404 />} />
                                <Route  path = "/" element = {<MainPage/>}/>
                                <Route  path = "comics" element = {  <ComicsPage/>}/>
                                <Route  path = "comics/:comicsId" element = {  <SingleComicsPage/>}/>
                              
                                 
                            </Routes>
                        </main> 
                        </div>

            </Router>
        )
   
}

export default App;