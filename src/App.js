import './App.css';
import {useEffect, useState} from "react";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import {Routes,Route,Navigate} from "react-router-dom";
import Items from "./pages/Items";
import NotFound from "./pages/NotFound";

function App() {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/items')
            .then(resp => resp.json())
            .then(itemsFromServer => setItems(itemsFromServer))
    }, [])


console.log(items)


  return (
    <div className="App">
        <Routes>
            <Route index element={<Navigate to='/items' />} />
            <Route path='/signIn' element={ <SignIn/>}/>
            <Route path='/signUp' element={ <SignUp/>}/>
            <Route path="/items" element={<Items items={items}/>}/>
            <Route path='*' element={<NotFound />} />

        </Routes>
    </div>
  );
}

export default App;
