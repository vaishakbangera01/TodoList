import AddToDo from "./Components/AddToDo";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Header/>
      <AddToDo/>
      <TodoList/>
      <ToastContainer/>
    </div>
  )
}

export default App

