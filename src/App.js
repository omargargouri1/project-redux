import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Tasks from './components/Tasks';
import ListTasks from './components/ListTask';
import AddTask from './components/AddTask';


function App() {
  

  return (
    <div className="App">
      <AddTask/>
      <ListTasks/>
      
     
    </div>
  );
}

export default App;
