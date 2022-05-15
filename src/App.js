import './components/Categories/categories.scss'
import Home from "./routes/Home/Home";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation";
import SignIn from "./routes/SignIn/SignIn";

const Shop = ()=>{
    return(
        <h1 className='container'>shop</h1>
    )
}
const App = () => {

    return (
        <Routes>
            <Route element={<Navigation/>} path='/'>
                <Route element={<Home/>} index/>
                <Route element={<Shop/>} path='shop'/>
                <Route element={<SignIn/>} path='signIn'/>
            </Route>
        </Routes>
    );
}

export default App;
