import { useDispatch, useSelector } from "react-redux";
import { changeTaskStatus, deleteTask, editTask } from "../../slices/todo/todoSlice";

export default function Tasks(props) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks);

  return (
    <div className="todo-list">
      {tasks.length > 0 && tasks.map((task, index) => {
        return (
          <div className="todo-item" key={index}>
            <div className="checker">
              <span>
                <input
                  type="checkbox"
                  value={task.status}
                  checked={task.status}
                  onChange={() => dispatch(changeTaskStatus(index))}
                />
              </span>
            </div>
            &nbsp;
            <span>{task.task}</span>
            <a
              href="#"
              className="float-right"
              style={{ float: 'right' }}
              onClick={() => dispatch(deleteTask(index))}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </a>
            <a
              href="#"
              className="float-right"
              style={{ float: 'right', marginRight: ' 5px' }}
              onClick={() => dispatch(editTask(index))}
            >
              <i className="fa fa-pencil" aria-hidden="true" />
            </a>
          </div>
        );
      })}
    </div>
  );
}