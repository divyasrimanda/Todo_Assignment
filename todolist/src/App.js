
import './App.css';
import Form from './components/Assignment1/InputForm';
import TodoWrapper from './components/Assignment2/TodoWrapper';

function App() {
  return (
    <div className="App">
    <div class="row">
    <div class="col">
    <TodoWrapper />
    </div>
    <div class="col">
    <Form />
    </div>
    </div>
     
     
    </div>
  );
}

export default App;
