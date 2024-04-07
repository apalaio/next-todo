import { newTodo } from '@/utils/actions';

const NewTodoForm = () => {
  return (
    <div>
      <form action={newTodo}>
        <input
          name="content"
          type="text"
          className="border border-black/25"
        ></input>
        <button type="submit">New Todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
