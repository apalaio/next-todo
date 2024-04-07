import { ITodo } from '@/utils/interfaces';
import Todo from './Todo';

const TodoList = ({ todos }: { todos: ITodo[] }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo: ITodo) => (
        <Todo todo={todo} key={todo.id}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
