import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskListe from './Components/TaskListe';


import AddTask from './Components/AddTask';
import FilterTask from './Components/FilterTask';
function App() {
  return (
    <div className="App">
    <div className='todo-container'>
    <h1>Todo App</h1>
    <AddTask/>
    <FilterTask/>
     <TaskListe/>
    </div>
    </div>
  );
}

export default App;