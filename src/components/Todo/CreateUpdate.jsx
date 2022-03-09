import { useDispatch, useSelector } from "react-redux";
import { changeTask, resetTask, createTask, updateTask } from "../../slices/todo/todoSlice";

export default function CreateUpdate() {
  const task = useSelector((state) => state.todo.task);
  const editIndex = useSelector((state) => state.todo.editIndex);
  const dispatch = useDispatch();

  let handleChange = (e) => {
    dispatch(changeTask(e.target.value));
  }

  let handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      dispatch(updateTask(task));
    } else {
      dispatch(createTask(task));
    }

    dispatch(resetTask());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control add-task"
        placeholder="New Task..."
        name="task"
        value={task.task}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}