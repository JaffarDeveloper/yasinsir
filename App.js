import logo from './logo.svg';
// import './App.css';
// import { Login } from './Component/Login';
// import { Navbar } from './Component/Navbar';
// import { Product } from './Component/Product';
// import{StudentData} from "./Component/StudentData"
// import Login from './Component/Login';
// import{StudentRegester} from "./Component/StudentRegester"
import {TodoList}from"./Component/TodoList"
import{MapProduct} from "./Component/MapProduct"

function App() {
  return (
    <div className="App">
      <MapProduct/>
      <TodoList/>
      {/* <StudentRegester/> */}
      {/* <StudentData/> */}
     {/* <Navbar/> */}
     {/* <Product/> */}
     {/* <Login/> */}
    </div>
  );
}

export default App;
