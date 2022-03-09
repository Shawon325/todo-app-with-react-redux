import './Todo.css';

import Tasks from './Tasks';
import CreateUpdate from './CreateUpdate';
import ActiveTasks from './ActiveTasks';
import NavBar from './NavBar';
import CompleteTasks from './CompleteTasks';
import { useSelector } from 'react-redux';

export default function Todo() {
  const navButton = useSelector((state) => state.navbar.navButton);

  let showTaskList = () => {
    if (navButton === 1) {
      return (
        <Tasks />
      );
    } else if (navButton === 2) {
      return (
        <ActiveTasks />
      );
    } else if (navButton === 3) {
      return (
        <CompleteTasks />
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">

              <CreateUpdate />

              <NavBar />

              {showTaskList()}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
