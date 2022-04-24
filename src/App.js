import './App.css';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch} from './Components/TodoSearch';
import { TodoItem} from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { CreateTodoButton } from './Components/CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tomar el curso de React', completed: false},
  { text: 'Ver Batman', completed: false}
]

function App() {
  return (
    <>
       <TodoCounter /> 
       <TodoSearch /> 
        <TodoList> 
          {
            todos.map( todo => <TodoItem key={todo.text} text={todo.text} />)
          }
        </TodoList>
      <CreateTodoButton /> 
    </>
  );
}

export default App;
