import './App.css';
//importing components
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>taskit - a to-do list app</h1>
      </header>
      <Form/>
      <ToDoList/>
    </div>
  );
}

export default App;
