import TodoList from '@/components/TodoList';
import db from '@/utils/db';

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TodosPage = async () => {
  const todos = await getData();

  return <TodoList todos={todos}></TodoList>;
};

export default TodosPage;
